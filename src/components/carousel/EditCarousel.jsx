import { useState, useEffect } from "react";

const EditCarousel = () => {
  const [carouselItems, setCarouselItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCarouselItems = async () => {
      try {
        const response = await fetch("https://lms-backend-f9h3.onrender.com/api/carousel/");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCarouselItems(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching carousel:", error);
        setLoading(false);
      }
    };

    fetchCarouselItems();
  }, []);

  const toggleStatus = async (id, currentStatus) => {
    try {
      const response = await fetch(`https://lms-backend-f9h3.onrender.com/api/carousel/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isActive: !currentStatus,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update status");
      }

      setCarouselItems((prevItems) =>
        prevItems.map((item) =>
          item._id === id ? { ...item, isActive: !currentStatus } : item
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-gray-200 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
        Edit Carousel Items
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {carouselItems.map((item) => (
          <div key={item._id} className="bg-white shadow-xl rounded-lg overflow-hidden">
            <img
              src={item.image}
              alt="Carousel Item"
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-blue-200">
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

export default EditCarousel;
