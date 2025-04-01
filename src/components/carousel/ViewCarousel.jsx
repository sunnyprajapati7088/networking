import { useState, useEffect } from "react";
import axios from "axios";
const ViewCarousel = () => {
  const [carousels, setcarousels] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch carousel data from the local API
  useEffect(() => {
    const fetchcarousels = async () => {
      try {
        const authToken = localStorage.getItem("authToken");
        const response =  await axios.get("http://localhost:5000/api/carousel", {
                  headers: { Authorization: `Bearer ${authToken}` }, // Attach token
                });
        const data = await response.json();
        setcarousels(data.filter((carousel) => carousel.isActive === true));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching carousels:", error);
        setLoading(false);
      }
    };
console.log(carousels)
    fetchcarousels();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-blue-200">
        <div className="w-16 h-16 border-4 border-t-4 border-blue-600 rounded-full animate-spin"></div> {/* Custom loader */}
      </div>
    );
  }

  return (
    <div className="p-6 bg-orange-200 min-h-screen">
      <h1 className="text-3xl font-extrabold text-center text-blue-800 mb-6">carousel Companies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {carousels.map((item, index) => (
          <div key={index} className="bg-white shadow-xl rounded-lg overflow-hidden transform transition-transform hover:scale-105">
            <img
              src={item.image}
              alt={item.company}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-blue-200">
              <p className="font-semibold text-lg text-blue-800">{item.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default  ViewCarousel;