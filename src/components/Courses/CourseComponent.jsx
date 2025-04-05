


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_BASE_URL = 'https://lms-backend-f9h3.onrender.com/api';

const CourseComponent = () => {
  const [categoriesWithCourses, setCategoriesWithCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // First fetch all categories
        const categoriesResponse = await axios.get(`${API_BASE_URL}/categories`);
        const categories = categoriesResponse.data;
        
        // Then fetch courses for each category
        const categoriesWithCoursesData = await Promise.all(
          categories.map(async (category) => {
            try {
              const coursesResponse = await axios.get(
                `${API_BASE_URL}/courses/category/${category._id}`
              );
              return {
                ...category,
                courses: coursesResponse.data
              };
            } catch (err) {
              console.error(`Error fetching courses for category ${category._id}:`, err);
              return {
                ...category,
                courses: []
              };
            }
          })
        );
        
        setCategoriesWithCourses(categoriesWithCoursesData);
      } catch (err) {
        console.error("Error loading data:", err);
        setError(err.response?.data?.message || err.message);
        toast.error("Failed to load course data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <span className="ml-4 text-gray-600">Loading courses...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-4 my-8 max-w-4xl mx-auto">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">Error loading courses</h3>
            <p className="text-sm text-red-700 mt-2">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-2 text-sm text-red-600 hover:text-red-500 font-medium"
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Certification Courses</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accelerate your IT career with industry-recognized certifications from leading technology providers
          </p>
        </div>

        {categoriesWithCourses.length > 0 ? (
          categoriesWithCourses.map((vendor) => (
            <div key={vendor._id} className="mb-20">
              <div className="flex items-center mb-8">
                <h3 className="text-3xl font-bold text-gray-800">{vendor.name || vendor.category}</h3>
                <div className="ml-4 h-0.5 flex-1 bg-gradient-to-r from-blue-100 to-orange-100"></div>
              </div>

              {vendor.courses && vendor.courses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {vendor.courses.map((course) => (
                    <div 
                      key={course._id}
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                    >
                      <div className="relative h-48">
                        <img 
                          src={course.image} 
                          alt={course.name} 
                          className="w-full h-full object-contain
                          "
                          loading="lazy"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://via.placeholder.com/400x200?text=Course+Image";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                        <div className="absolute bottom-0 left-0 p-6">
                          <h4 className="text-2xl font-bold text-white">{course.name}</h4>
                        </div>
                      </div>

                      <div className="p-6">
                        <p className="text-gray-700 mb-6">{course.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Duration</p>
                            <p className="font-medium text-gray-800">{course.duration}</p>
                          </div>
                          <div className="bg-orange-50 p-3 rounded-lg">
                            <p className="text-xs font-semibold text-orange-600 uppercase tracking-wider">Level</p>
                            <p className="font-medium text-gray-800">{course.level}</p>
                          </div>
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Avg. Salary</p>
                            <p className="font-medium text-gray-800">{course.salary}</p>
                          </div>
                          <div className="bg-orange-50 p-3 rounded-lg">
                            <p className="text-xs font-semibold text-orange-600 uppercase tracking-wider">Demand</p>
                            <p className="font-medium text-gray-800">{course.demand}</p>
                          </div>
                        </div>

                        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center">
                          <span>Explore Course</span>
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        No courses available for {vendor.name || vendor.category} yet.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  No certification categories available yet. Please check back later.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-16">
          <button 
            className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span>Back to Top</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseComponent;