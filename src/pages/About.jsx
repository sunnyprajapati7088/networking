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
        About INS
At INS , we have been transforming careers in IT since 1998, helping aspiring professionals become Network Engineers, Cloud Engineers, and Security Engineers. Our industry-leading training programs cover A+, Network+, MCSA, RHCSA, CCNA, CCNP, AWS Cloud, MS Azure, Cybersecurity, CEH, and more.

With internationally certified trainers, state-of-the-art infrastructure, and a hands-on approach, we ensure students gain practical skills and expertise. Beyond technical knowledge, we focus on interview preparation, communication skills, and personality development to make you job-ready.

Join INS and benefit from 100% job placement with opportunities in leading national and international companies .

🚀 Start your journey to a successful IT career today! 
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
