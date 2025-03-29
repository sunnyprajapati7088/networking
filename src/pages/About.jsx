import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-orange-500 text-white p-6">
      {/* Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl text-center bg-white text-gray-900 p-8 rounded-lg shadow-lg"
      >
        {/* Title */}
        <h2 className="text-4xl font-bold text-blue-900">About <span className="text-orange-500">Us</span></h2>

        {/* Description */}
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Welcome to the <span className="font-bold text-blue-900">Institute of Network Solution</span>,  
          where technology meets innovation! We specialize in **networking & IT training**,  
          offering top-tier courses in **Cisco, Microsoft, AWS, Red Hat, and more**.  
        </p>

        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Our **mission** is to empower individuals with **industry-recognized certifications**  
          and practical skills to thrive in today’s digital landscape.  
        </p>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition"
        >
          Learn More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;
