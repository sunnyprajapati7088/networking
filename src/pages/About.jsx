// import React from "react";
// import { motion } from "framer-motion";

// const About = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-orange-500 text-white p-6">
//       {/* Container */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="max-w-4xl text-center bg-white text-gray-900 p-8 rounded-lg shadow-lg"
//       >
//         {/* Title */}
//         <h2 className="text-4xl font-bold text-blue-900">About <span className="text-orange-500">Us</span></h2>

//         {/* Description */}
//         <p className="mt-4 text-lg text-gray-700 leading-relaxed">
//         About INS
// At INS , we have been transforming careers in IT since 1998, helping aspiring professionals become Network Engineers, Cloud Engineers, and Security Engineers. Our industry-leading training programs cover A+, Network+, MCSA, RHCSA, CCNA, CCNP, AWS Cloud, MS Azure, Cybersecurity, CEH, and more.

// With internationally certified trainers, state-of-the-art infrastructure, and a hands-on approach, we ensure students gain practical skills and expertise. Beyond technical knowledge, we focus on interview preparation, communication skills, and personality development to make you job-ready.

// Join INS and benefit from 100% job placement with opportunities in leading national and international companies .

// 🚀 Start your journey to a successful IT career today! 
//         </p>

       

//         {/* CTA Button */}
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition"
//         >
//           Learn More
//         </motion.button>
//       </motion.div>
//     </div>
//   );
// };

// export default About;


import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-orange-300 text-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      {/* Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 lg:p-16">
          {/* Title */}
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-800"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">INS</span>
          </motion.h2>

          {/* Description */}
          <div className="space-y-6 text-gray-700">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg leading-relaxed"
            >
              At <span className="font-semibold text-blue-600">INS</span>, we have been transforming careers in IT since 1998, helping aspiring professionals become Network Engineers, Cloud Engineers, and Security Engineers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="bg-blue-50/50 p-6 rounded-lg border-l-4 border-orange-500"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Our Training Programs</h3>
              <p className="leading-relaxed">
                Our industry-leading training programs cover A+, Network+, MCSA, RHCSA, CCNA, CCNP, AWS Cloud, MS Azure, Cybersecurity, CEH, and more.
              </p>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg leading-relaxed"
            >
              With internationally certified trainers, state-of-the-art infrastructure, and a hands-on approach, we ensure students gain practical skills and expertise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="bg-orange-50/50 p-6 rounded-lg border-l-4 border-blue-500"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Beyond Technical Skills</h3>
              <p className="leading-relaxed">
                We focus on interview preparation, communication skills, and personality development to make you truly job-ready.
              </p>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-lg font-medium leading-relaxed text-gray-800"
            >
              Join INS and benefit from <span className="text-blue-600">100% job placement</span> with opportunities in leading national and international companies.
            </motion.p>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Learn More
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;