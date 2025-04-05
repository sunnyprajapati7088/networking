import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
const API_BASE_URL = 'https://lms-backend-f9h3.onrender.com/api';



const Landing = () => {

    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchCourses = async () => {
        try {
          setLoading(true);
          setError(null);
          const response = await axios.get(`${API_BASE_URL}/courses`);
          setCourses(response.data);
        } catch (err) {
          console.error("Error fetching courses:", err);
          setError("Failed to load courses");
        } finally {
          setLoading(false);
        }
      };
      fetchCourses();
    }, []);
  
    const sliderSettings = {
      dots: false,
      infinite: true,
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      responsive: [
        { breakpoint: 1280, settings: { slidesToShow: 2 } },
        { breakpoint: 768, settings: { slidesToShow: 1 } },
      ],
    };
  
    if (loading) return <p className="text-center text-lg">Loading courses...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;
  
    return (
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Explore Our Courses</h2>
        <Slider {...sliderSettings}>
          {courses.map((course) => (
            <div key={course._id} className="p-4">
              <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
                <img src={course.image} alt={course.name} className="w-full h-56 object-contain" />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-900">{course.name}</h3>
                  <p className="text-gray-600 text-sm mt-2">{course.duration}</p>
                  <p className="text-lg font-bold text-green-500 mt-1">₹{course.salary}</p>
                  <p className="text-lg  text-black mt-1">{course.description}</p>
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  

export default Landing;
