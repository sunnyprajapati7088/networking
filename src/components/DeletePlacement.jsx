import { useState, useEffect } from "react";

const DeletePlacement = () => {
  const [placements, setPlacements] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch placements data
  useEffect(() => {
    const fetchPlacements = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/placement/");
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

  // Function to handle the deletion (actually marking as inactive)
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/placement/delete/${id}`, {
        method: "PUT", // Use PUT for updates
      });
      console.log("Response:", response); // Log the response for debugging 
      if (response.ok) {
        alert("Placement marked as inactive.");
        setPlacements(placements.filter((placement) => placement._id !== id)); // Remove from the list locally
      } else {
        alert("Error marking placement as inactive.");
      }
    } catch (error) {
      console.error("Error marking placement as inactive:", error);
      alert("Error marking placement as inactive.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-blue-200">
        <div className="w-16 h-16 border-4 border-t-4 border-blue-600 rounded-full animate-spin"></div> {/* Custom loader */}
      </div>
    );
  }

  return (
    <div className="p-6 bg-orange-200 min-h-screen">
      <h1 className="text-3xl font-extrabold text-center text-blue-800 mb-6">Delete Placement Data</h1>
      <p className="text-center mb-6">Click "Delete" to mark placement as inactive.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {placements.map((placement) =>
          placement.isActive !== false ? ( // Only show active placements
            <div key={placement._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={placement.image}
                alt={placement.company}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-blue-200">
                <p className="font-semibold text-lg text-blue-800">{placement.company}</p>
                <button
                  onClick={() => handleDelete(placement._id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-md mt-4"
                >
                  Mark as Inactive
                </button>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default DeletePlacement;
