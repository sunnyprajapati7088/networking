// // import React from "react";
// // import { motion } from "framer-motion";

// // const About = () => {
// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-orange-500 text-white p-6">
// //       {/* Container */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 50 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 1 }}
// //         className="max-w-4xl text-center bg-white text-gray-900 p-8 rounded-lg shadow-lg"
// //       >
// //         {/* Title */}
// //         <h2 className="text-4xl font-bold text-blue-900">About <span className="text-orange-500">Us</span></h2>

// //         {/* Description */}
// //         <p className="mt-4 text-lg text-gray-700 leading-relaxed">
// //         About Institute of Network Solution
// // At Institute of Network Solution , we have been transforming careers in IT since 1998, helping aspiring professionals become Network Engineers, Cloud Engineers, and Security Engineers. Our industry-leading training programs cover A+, Network+, MCSA, RHCSA, CCNA, CCNP, AWS Cloud, MS Azure, Cybersecurity, CEH, and more.

// // With internationally certified trainers, state-of-the-art infrastructure, and a hands-on approach, we ensure students gain practical skills and expertise. Beyond technical knowledge, we focus on interview preparation, communication skills, and personality development to make you job-ready.

// // Join Institute of Network Solution and benefit from 100% job placement with opportunities in leading national and international companies .

// // 🚀 Start your journey to a successful IT career today! 
// //         </p>

       

// //         {/* CTA Button */}
// //         <motion.button
// //           whileHover={{ scale: 1.05 }}
// //           whileTap={{ scale: 0.95 }}
// //           className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition"
// //         >
// //           Learn More
// //         </motion.button>
// //       </motion.div>
// //     </div>
// //   );
// // };

// // export default About;


// import React from "react";
// import { motion } from "framer-motion";

// const About = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-300 to-orange-300 text-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
//       {/* Container */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="w-full max-w-5xl bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden"
//       >
//         {/* Decorative elements */}
//         <div className="relative">
//           <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
//           <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
//         </div>

//         {/* Content */}
//         <div className="p-8 md:p-12 lg:p-16">
//           {/* Title */}
//           <motion.h2 
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//             className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-800"
//           >
//             About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">Institute of Network Solution</span>
//           </motion.h2>

//           {/* Description */}
//           <div className="space-y-6 text-gray-700">
//             <motion.p 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.4, duration: 0.8 }}
//               className="text-lg leading-relaxed"
//             >
//               At <span className="font-semibold text-blue-600">Institute of Network Solution</span>, we have been transforming careers in IT since 1998, helping aspiring professionals become Network Engineers, Cloud Engineers, and Security Engineers.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.6, duration: 0.8 }}
//               className="bg-blue-50/50 p-6 rounded-lg border-l-4 border-orange-500"
//             >
//               <h3 className="text-xl font-semibold mb-3 text-gray-800">Our Training Programs</h3>
//               <p className="leading-relaxed">
//                 Our industry-leading training programs cover A+, Network+, MCSA, RHCSA, CCNA, CCNP, AWS Cloud, MS Azure, Cybersecurity, CEH, and more.
//               </p>
//             </motion.div>

//             <motion.p 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.8, duration: 0.8 }}
//               className="text-lg leading-relaxed"
//             >
//               With internationally certified trainers, state-of-the-art infrastructure, and a hands-on approach, we ensure students gain practical skills and expertise.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1.0, duration: 0.8 }}
//               className="bg-orange-50/50 p-6 rounded-lg border-l-4 border-blue-500"
//             >
//               <h3 className="text-xl font-semibold mb-3 text-gray-800">Beyond Technical Skills</h3>
//               <p className="leading-relaxed">
//                 We focus on interview preparation, communication skills, and personality development to make you truly job-ready.
//               </p>
//             </motion.div>

//             <motion.p 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1.2, duration: 0.8 }}
//               className="text-lg font-medium leading-relaxed text-gray-800"
//             >
//               Join Institute of Network Solution and benefit from <span className="text-blue-600">100% job placement</span> with opportunities in leading national and international companies.
//             </motion.p>
//           </div>

//           {/* CTA Button */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.4, duration: 0.8 }}
//             className="mt-10 flex flex-col sm:flex-row gap-4"
//           >
//             <motion.button
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//               className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
//             >
//               Learn More
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//               className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
//             >
//               Contact Us
//             </motion.button>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default About;



import React from "react";
import { motion } from "framer-motion";

// All content in JSON format
const aboutData = {
  vision: "To set the benchmark for IT training by creating a workforce that is not just skilled but future-ready, innovative, and globally competitive.",
  mission: "To transform aspiring IT professionals into industry-ready experts through hands-on training, real-world exposure, and career-driven mentorship.",
  aboutText: "At Institute of Network Solution, we have been transforming careers in IT since 1998, helping aspiring professionals become Network Engineers, Cloud Engineers, and Security Engineers.",
  certifications: {
    cloud: [
      {
        title: "AWS Certified Solutions Architect – Associate",
        description: "This certification validates expertise in designing scalable, cost-efficient, and secure cloud solutions on Amazon Web Services (AWS). It covers topics like compute, storage, networking, security, and best practices for architecting cloud environments. Ideal for cloud engineers, architects, and developers looking to strengthen their AWS knowledge."
      },
      {
        title: "Microsoft Certified: Azure Solutions Architect Expert",
        description: "This certification focuses on designing and implementing Microsoft Azure solutions, covering areas like compute, networking, security, and DevOps. It is ideal for cloud architects and senior engineers responsible for translating business requirements into secure and scalable Azure solutions."
      }
    ],
    cybersecurity: [
      {
        title: "CompTIA Security+",
        description: "CompTIA Security+ is an entry-level cybersecurity certification that covers fundamental security concepts, including network security, risk management, cryptography, and threat detection. It is vendor-neutral and widely recognized for building a strong cybersecurity foundation, making it ideal for beginners."
      },
      {
        title: "Certified Ethical Hacker (CEH)",
        description: "CEH is a cybersecurity certification that focuses on ethical hacking techniques, penetration testing, and vulnerability assessment. It teaches professionals how to think like hackers to secure systems proactively. The certification covers topics like malware analysis, social engineering, and network exploitation, making it popular for cybersecurity roles in offensive security."
      }
    ]
  },
  team: [
    {
      name: "J.R. Jakhar",
      position: "Chairman",
      description: "J.R. Jakhar, the Chairman of Institute of Network Solution, brings over 40 years of expertise across multiple technology domaInstitute of Network Solution and has been leading the institute for 27 years. His vision and dedication have shaped INS into a premier training hub, empowering professionals with industry-relevant skills and knowledge."
    },
    {
      name: "Jitendra Jakhar",
      position: "Mentor & Industry Advisor",
      description: "With 25 years of experience as network and security architect, quad CCIE certified and distinguished trainer, Jitendra provides strategic guidance and mentorship to aspiring IT professionals at INS. His industry insights help shape training programs that align with real-world requirements."
    },
    {
      name: "Chandrashekhar Jakhar",
      position: "Mentor & Industry Advisor",
      description: "A NIT alumni with extensive experience in engineering customer and employee experiences, Chandrashekhar provides valuable guidance to students at INS. As a cloud solutions and network engineering expert, he helps shape training programs that align with industry needs. His deep knowledge of AI, automation, and agile methodologies ensures that students gain insights into the latest technological advancements."
    },
    // {
    //   name: "Anil Kumar",
    //   position: "Placement Head",
    //   description: "Anil Kumar connects Institute of Network Solution students with top IT career opportunities through strategic career guidance and industry collaborations. His expertise ensures a high placement success rate, preparing students to excel in the job market."
    // },
    {
      name: "Ashish Muwal",
      position: "Admin Head",
      description: "Ashish Muwal ensures seamless administration, optimizing Institute of Network Solution's operations for a smooth learning experience."
    },
    {
      name: "Bharat Bhakar",
      position: "Technical Head",
      description: "Bharat Bhakar provides next-level technical training, ensuring students gain industry-ready skills in IT and cybersecurity."
    }
  ]
};

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto">
        {/* Vision & Mission Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-8 md:p-12 lg:p-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Vision & Mission</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-blue-50/50 p-6 rounded-xl border-l-4 border-blue-600">
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">Vision</h3>
                <p className="text-gray-700 leading-relaxed">{aboutData.vision}</p>
              </div>
              
              <div className="bg-orange-50/50 p-6 rounded-xl border-l-4 border-orange-600">
                <h3 className="text-2xl font-semibold mb-4 text-orange-800">Mission</h3>
                <p className="text-gray-700 leading-relaxed">{aboutData.mission}</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* About INS Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-8 md:p-12 lg:p-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800">
              About <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">Institute of Network Solution</p>
            </h2>
            
            <div className="space-y-6 text-gray-700 max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed">{aboutData.aboutText}</p>
              
              <div className="bg-blue-50/50 p-6 rounded-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Our Training Programs</h3>
                <p className="leading-relaxed">
                  Our industry-leading training programs cover A+, Network+, MCSA, RHCSA, CCNA, CCNP, AWS Cloud, MS Azure, Cybersecurity, CEH, and more.
                </p>
              </div>

              <p className="text-lg leading-relaxed">
                With internationally certified trainers, state-of-the-art infrastructure, and a hands-on approach, we ensure students gain practical skills and expertise.
              </p>

              <div className="bg-orange-50/50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Beyond Technical Skills</h3>
                <p className="leading-relaxed">
                  We focus on interview preparation, communication skills, and personality development to make you truly job-ready.
                </p>
              </div>

              <p className="text-lg font-medium leading-relaxed text-gray-800">
                Join Institute of Network Solution and benefit from <span className="text-blue-600">100% job placement</span> with opportunities in leading national and international companies.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16 bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-8 md:p-12 lg:p-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-800">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Certifications</span>
            </h2>
            
            <div className="space-y-16">
              {/* Cloud Certifications */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-200 pb-2">Cloud Certifications</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {aboutData.certifications.cloud.map((cert, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ y: -5 }}
                      className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md border border-gray-100"
                    >
                      <h4 className="text-xl font-semibold mb-3 text-blue-700">{cert.title}</h4>
                      <p className="text-gray-700">{cert.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Cybersecurity Certifications */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-orange-200 pb-2">Cybersecurity Certifications</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {aboutData.certifications.cybersecurity.map((cert, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ y: -5 }}
                      className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl shadow-md border border-gray-100"
                    >
                      <h4 className="text-xl font-semibold mb-3 text-orange-700">{cert.title}</h4>
                      <p className="text-gray-700">{cert.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16 bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-8 md:p-12 lg:p-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-800">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">Team</span>
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {aboutData.team.map((member, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
                >
                  <div className="h-48 bg-gradient-to-r from-blue-100 to-orange-100 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center text-4xl font-bold text-gray-500">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                    <p className="text-orange-600 font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
            Ready to start your IT career journey?
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Contact Us
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              View Courses
            </motion.button>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default About;