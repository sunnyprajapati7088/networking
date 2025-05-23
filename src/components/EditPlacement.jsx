import { useState, useEffect } from "react";

const EditPlacement = () => {
  const [placements, setPlacements] = useState([]);
  const [loading, setLoading] = useState(true);
const token = localStorage.getItem("authToken"); 
  // Fetch placement data from the API
  useEffect(() => {
    const fetchPlacements = async () => {
      try {
        const response = await fetch("https://lms-backend-f9h3.onrender.com/api/placement/",{ headers: { Authorization: `Bearer ${token}` },});
        if (!response.ok) {
          throw new Error("Failed to fetch placements");
        }
        const data = await response.json();
        setPlacements(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching placements:", error);
        setLoading(false);
      }
    };

    fetchPlacements();
  }, []);

  // Toggle placement status between active and inactive
  const toggleStatus = async (id, currentStatus) => {
    try {
      const response = await fetch(`https://lms-backend-f9h3.onrender.com/api/placement/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Add your token here
        },
        body: JSON.stringify({
          isActive: !currentStatus, // Toggle status
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update status");
      }

      // Update the status locally after successful update
      setPlacements((prevPlacements) =>
        prevPlacements.map((placement) =>
          placement._id === id
            ? { ...placement, isActive: !currentStatus }
            : placement
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-blue-200">
        <div className="w-16 h-16 border-4 border-t-4 border-blue-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-orange-200 min-h-screen">
      <h1 className="text-3xl font-extrabold text-center text-blue-800 mb-6">
        Edit Placement Data
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {placements.map((item) => (
          <div key={item._id} className="bg-white shadow-xl rounded-lg overflow-hidden">
            <img
              src={item.image}
              alt={item.company}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-blue-200">
              <p className="font-semibold text-lg text-blue-800">{item.company}</p>
              <p className={`font-semibold text-lg ${item.isActive ? "text-green-500" : "text-red-500"}`}>
                Status: {item.isActive ? "Active" : "Inactive"}
              </p>
              <button
                onClick={() => toggleStatus(item._id, item.isActive)}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                {item.isActive ? "Deactivate" : "Activate"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditPlacement;
