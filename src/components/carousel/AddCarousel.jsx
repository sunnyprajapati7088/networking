

// import { useState } from "react";

// const AddPlacement = () => {
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [imageUrl, setImageUrl] = useState("");

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleUpload = async () => {
//     if (!image) {
//       alert("Please select an image to upload.");
//       return;
//     }

//     setUploading(true);

//     const formData = new FormData();
//     formData.append("file", image);

//     try {
//       const response = await fetch("http://localhost:5000/api/images/upload", {
//         method: "POST",
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error("Upload failed");
//       }

//       const data = await response.json();
//       setImageUrl(data.url);
//       alert("Image uploaded successfully!");
//       console.log("Uploaded Image URL:", data.url);

//     } catch (error) {
//       console.error("Upload failed:", error);
//       alert("Upload failed. Try again.");
//     }

//     setUploading(false);
//   };

//   return (
//     <div className="p-6 bg-white shadow-md rounded-md">
//       <h1 className="text-2xl font-bold mb-4">Add Placement Data</h1>
//       <div className="mb-4">
//         <label className="block text-gray-700">Upload Placement Image:</label>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleImageChange}
//           className="mt-2"
//         />
//       </div>

//       {preview && (
//         <div className="mb-4">
//           <p className="text-gray-600">Image Preview:</p>
//           <img
//             src={preview}
//             alt="Preview"
//             className="mt-2 w-48 h-48 object-cover rounded-md"
//           />
//         </div>
//       )}

//       <button
//         onClick={handleUpload}
//         disabled={uploading}
//         className={`px-4 py-2 text-white rounded-md ${
//           uploading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
//         }`}
//       >
//         {uploading ? "Uploading..." : "Upload Image"}
//       </button>

//       {imageUrl && (
//         <div className="mt-4">
//           <p className="text-gray-600">Uploaded Image URL:</p>
//           <a href={imageUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600">
//             {imageUrl}
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddPlacement;


import { useState } from "react";

const  AddCarousel= () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!image) {
      alert("Please select an image to upload.");
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append("file", image);

    try {
      // Upload image to Cloudinary
      const response = await fetch("http://localhost:5000/api/images/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data = await response.json();
      setImageUrl(data.url);
      alert("Image uploaded successfully!");
      console.log("Uploaded Image URL:", data.url);

      // After getting Cloudinary URL, post it to the placement add endpoint
      const placementData = {
        image: data.url,
        // Add any other data you want to send to the backend
      };

      const placementResponse = await fetch("http://localhost:5000/api/carousel/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(placementData),
      });

      if (placementResponse.ok) {
        alert("=Carousel data added successfully!");
      } else {
        throw new Error("Failed to add placement data.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }

    setUploading(false);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Add Carousel Data</h1>
      <div className="mb-4">
        <label className="block text-gray-700">Upload Carousel Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-2"
        />
      </div>

      {preview && (
        <div className="mb-4">
          <p className="text-gray-600">Image Preview:</p>
          <img
            src={preview}
            alt="Preview"
            className="mt-2 w-48 h-48 object-cover rounded-md"
          />
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={uploading}
        className={`px-4 py-2 text-white rounded-md ${
          uploading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {uploading ? "Uploading..." : "Upload Image"}
      </button>

      {imageUrl && (
        <div className="mt-4">
          <p className="text-gray-600">Uploaded Image URL:</p>
          <a href={imageUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600">
            {imageUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default AddCarousel;
