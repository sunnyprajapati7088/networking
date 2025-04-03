

import React from "react";
import { motion } from "framer-motion";

const SearchResults = ({courses}) => {
 

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Certification Courses</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-recognized certifications to boost your IT career
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses?.map((course, index) => (
            <motion.div
              key={course._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Course Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Course Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-bold text-gray-800">{course.name}</h2>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    course.demand === "HIGH" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {course.demand} Demand
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{course.description}</p>

                {/* Course Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="font-medium">{course.category.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-medium">{course.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Level</p>
                    <p className="font-medium">{course.level}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Avg. Salary</p>
                    <p className="font-medium">{course.salary}</p>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
                >
                  Enroll Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-white rounded-xl shadow-md p-8 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Not sure which course is right for you?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our career counselors can help you choose the perfect certification path based on your background and career goals.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-8 rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
          >
            Get Career Guidance
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default SearchResults;