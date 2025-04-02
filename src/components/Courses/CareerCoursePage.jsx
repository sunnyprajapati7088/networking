// import React from 'react';

// const CareerCoursePage = () => {
//   // All data organized in JSON format
//   const courseData = {
//     heroSection: {
//       title: "100% Job Guarantee",
//       subtitle: "Boost your career with INS Job Guarantee Courses",
//       description: "No IT Background? No Problem! BA, B Com., BSc Graduates Can Become Network Engineer in 1 Year!",
//       highlights: [
//         "NETWORK ENGINEERS ARE THE BACKBONE OF THE DIGITAL WORLD",
//         "HIGH DEMAND",
//         "HIGH SALARY",
//         "HIGH GROWTH!"
//       ]
//     },
//     programOverview: {
//       title: "ACNP (Advance Computer Network Professional)",
//       subtitle: "Why Enroll in the ACNP Program? Master IT, Networking & Career Growth – All in One Program!",
//       modules: [
//         {
//           column1: [
//             "Know your PC",
//             "MICROSOFT-MCWSA",
//             "Cloud Computing",
//             "Resume Preparation"
//           ],
//           column2: [
//             "CompTIA Network+",
//             "REDHAT-RHCSA",
//             "Firewall Network Security",
//             "Interview Preparation"
//           ],
//           column3: [
//             "CISCO-CCNA",
//             "Advanced Tech. Module",
//             "LinkedIn Profile Optimization",
//             "Personality Development"
//           ]
//         }
//       ],
//       description: "Start from Basics, Become an Expert – Your Future in Networking!",
//       guarantee: "100% Job Placement Guarantee at starting package of 3-12 lacs per annum after ACNP Training from INS-Jaipur!!",
//       certifications: [
//         "CompTIA",
//         "Microsoft",
//         "Red Hat",
//         "AWS"
//       ]
//     },
//     process: {
//       title: "This is how our Training and Placement Process Works!",
//       steps: [
//         "Enroll in the ACNP Course @ INS",
//         "Get IT & Networking Training",
//         "Develop Soft Skills",
//         "Get Placed @3-12 Lacs Package & Start Your IT Career!",
//         "Get Interview Opportunities from Our Placement Team",
//         "Attend Interview Preparation Classes"
//       ]
//     },
//     jobReady: {
//       title: "WE MAKE YOU JOB READY!",
//       description: "Along with ACNP Technical Training, we also provide free Soft Skills & Professional Development Classes daily to prepare you for the IT industry",
//       features: [
//         "Professional Grooming & Confidence Building",
//         "Group Discussions & Team Collaboration",
//         "Communication Skills & Spoken English",
//         "Resume Writing & Interview Preparation",
//         "Hands-on Practice In Real Labs",
//         "Program Tracking Assignments & Guidance from Industry Experts"
//       ]
//     }
//   };

//   return (
//     <div className="font-sans bg-gray-50">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-4xl sm:text-5xl font-bold mb-4">{courseData.heroSection.title}</h1>
//           <p className="text-xl sm:text-2xl mb-6">{courseData.heroSection.subtitle}</p>
//           <p className="text-lg sm:text-xl mb-8">{courseData.heroSection.description}</p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10">
//             {courseData.heroSection.highlights.map((highlight, index) => (
//               <div key={index} className="bg-blue-700 bg-opacity-50 p-4 rounded-lg">
//                 <p className="font-semibold text-center">{highlight}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Program Overview */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">{courseData.programOverview.title}</h2>
//           <p className="text-xl text-center mb-12 text-gray-600">{courseData.programOverview.subtitle}</p>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//             {Object.values(courseData.programOverview.modules[0]).map((column, colIndex) => (
//               <div key={colIndex} className="bg-gray-50 p-6 rounded-lg shadow-sm">
//                 <ul className="space-y-4">
//                   {column.map((item, itemIndex) => (
//                     <li key={itemIndex} className="flex items-start">
//                       <span className="text-blue-600 mr-2">✓</span>
//                       <span className="text-gray-700">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>

//           <p className="text-center text-lg mb-8 text-gray-700">{courseData.programOverview.description}</p>
//           <p className="text-center text-xl font-bold mb-12 text-blue-700">{courseData.programOverview.guarantee}</p>

//           <div className="text-center">
//             <h3 className="text-xl font-semibold mb-6 text-gray-800">International Certification Companies</h3>
//             <div className="flex flex-wrap justify-center gap-8">
//               {courseData.programOverview.certifications.map((cert, index) => (
//                 <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center w-32 h-20">
//                   <span className="font-medium text-gray-800">{cert}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{courseData.process.title}</h2>
          
//           <div className="space-y-8 relative">
//             {/* Vertical line */}
//             <div className="hidden md:block absolute left-8 h-full w-0.5 bg-blue-500 top-0"></div>
            
//             {courseData.process.steps.map((step, index) => (
//               <div key={index} className="relative pl-12 md:pl-24">
//                 {/* Number circle */}
//                 <div className="absolute left-0 md:left-16 top-0 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
//                   {index + 1}
//                 </div>
//                 <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
//                   <p className="text-lg font-medium text-gray-800">{step}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Job Ready Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">{courseData.jobReady.title}</h2>
//           <p className="text-xl text-center mb-12 text-gray-600 max-w-4xl mx-auto">{courseData.jobReady.description}</p>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {courseData.jobReady.features.map((feature, index) => (
//               <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
//                 <div className="text-blue-600 text-2xl mb-3">✓</div>
//                 <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.split('&')[0]}</h3>
//                 {feature.includes('&') && (
//                   <p className="text-gray-600">{feature.split('&')[1]}</p>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-700 text-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-6">Ready to Start Your IT Career?</h2>
//           <p className="text-xl mb-8">Join our ACNP program today and secure your future in networking!</p>
//           <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
//             Enroll Now
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CareerCoursePage;


import React from 'react';

const CareerCoursePage = () => {
  // All data organized in JSON format
  const courseData = {
    heroSection: {
      title: "100% Job Guarantee",
      subtitle: "Boost your career with INS Job Guarantee Courses",
      description: "No IT Background? No Problem! BA, B Com., BSc Graduates Can Become Network Engineer in 1 Year!",
      highlights: [
        "NETWORK ENGINEERS ARE THE BACKBONE OF THE DIGITAL WORLD",
        "HIGH DEMAND",
        "HIGH SALARY",
        "HIGH GROWTH!"
      ]
    },
    programOverview: {
      title: "ACNP (Advance Computer Network Professional)",
      subtitle: "Why Enroll in the ACNP Program? Master IT, Networking & Career Growth – All in One Program!",
      modules: [
        {
          column1: [
            "Know your PC",
            "MICROSOFT-MCWSA",
            "Cloud Computing",
            "Resume Preparation"
          ],
          column2: [
            "CompTIA Network+",
            "REDHAT-RHCSA",
            "Firewall Network Security",
            "Interview Preparation"
          ],
          column3: [
            "CISCO-CCNA",
            "Advanced Tech. Module",
            "LinkedIn Profile Optimization",
            "Personality Development"
          ]
        }
      ],
      description: "Start from Basics, Become an Expert – Your Future in Networking!",
      guarantee: "100% Job Placement Guarantee at starting package of 3-12 lacs per annum after ACNP Training from INS-Jaipur!!",
      certifications: [
        "CompTIA",
        "Microsoft",
        "Red Hat",
        "AWS"
      ]
    },
    process: {
      title: "This is how our Training and Placement Process Works!",
      steps: [
        "Enroll in the ACNP Course @ INS",
        "Get IT & Networking Training",
        "Develop Soft Skills",
        "Get Placed @3-12 Lacs Package & Start Your IT Career!",
        "Get Interview Opportunities from Our Placement Team",
        "Attend Interview Preparation Classes"
      ]
    },
    jobReady: {
      title: "WE MAKE YOU JOB READY!",
      description: "Along with ACNP Technical Training, we also provide free Soft Skills & Professional Development Classes daily to prepare you for the IT industry",
      features: [
        "Professional Grooming & Confidence Building",
        "Group Discussions & Team Collaboration",
        "Communication Skills & Spoken English",
        "Resume Writing & Interview Preparation",
        "Hands-on Practice In Real Labs",
        "Program Tracking Assignments & Guidance from Industry Experts"
      ]
    },
     
    salaryGrowth: {
        title: "ACNP Boosts Your Career & Salary",
        chart: {
          labels: ["Before ACNP", "1 Year", "2 Year", "5 Year", "7 Year", "10 Year", "15 Year"],
          values: [3, 8, 15, 25, 35, 45, 50], // in LPA
          unit: "LPA"
        },
        note: "Average Salary Package Growth Chart"
      },
      jobRoles: {
        title: "Get Job Roles After ACNP",
        roles: [
          "IT Support Specialist",
          "Network Engineer",
          "System Administrator",
          "Cloud Engineer", 
          "Server Administrator"
        ]
      }

  
    // Calculate maximum value for chart scaling
    
  };
  const maxValue = Math.max(...courseData.salaryGrowth.chart.values);

  return (
    <div className="font-sans bg-gray-50 antialiased">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-2">
            <span className="inline-block bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              TRUSTED BY 10,000+ STUDENTS
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            {courseData.heroSection.title}
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            {courseData.heroSection.subtitle}
          </p>
          <p className="text-lg sm:text-xl mb-12 max-w-3xl mx-auto opacity-90">
            {courseData.heroSection.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {courseData.heroSection.highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
              >
                <p className="font-semibold text-center text-lg">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              {courseData.programOverview.title}
            </h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {courseData.programOverview.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {Object.values(courseData.programOverview.modules[0]).map((column, colIndex) => (
              <div 
                key={colIndex} 
                className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <ul className="space-y-4">
                  {column.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-indigo-600 mr-3 mt-1">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              {courseData.programOverview.description}
            </p>
            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 inline-block max-w-2xl">
              <p className="text-xl font-bold text-indigo-700">
                {courseData.programOverview.guarantee}
              </p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">
              International Certification Partners
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {courseData.programOverview.certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center w-40 h-24 border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <span className="font-medium text-gray-800 text-lg">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              {courseData.process.title}
            </h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4"></div>
          </div>
          
          <div className="space-y-10 relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-8 h-full w-0.5 bg-indigo-200 top-4"></div>
            
            {courseData.process.steps.map((step, index) => (
              <div key={index} className="relative pl-12 md:pl-24">
                {/* Number circle */}
                <div className="absolute left-0 md:left-16 top-0 w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xl shadow-md">
                  {index + 1}
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-indigo-600 hover:shadow-md transition-all">
                  <p className="text-lg font-medium text-gray-800 leading-relaxed">
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Ready Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              {courseData.jobReady.title}
            </h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4 mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {courseData.jobReady.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseData.jobReady.features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-indigo-100"
              >
                <div className="text-indigo-600 text-3xl mb-4">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {feature.split('&')[0].trim()}
                </h3>
                {feature.includes('&') && (
                  <p className="text-gray-600 leading-relaxed">
                    {feature.split('&')[1].trim()}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Join our ACNP program today and secure your future in the high-growth networking industry!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-indigo-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
              Enroll Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:bg-opacity-10 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              {courseData.salaryGrowth.title}
            </h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4 mb-8"></div>
            <p className="text-lg text-gray-600 mb-12">
              {courseData.salaryGrowth.note}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Chart Visualization */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <div className="h-64 flex items-end space-x-2 sm:space-x-4">
                {courseData.salaryGrowth.chart.values.map((value, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div className="w-full flex flex-col items-center">
                      <div 
                        className="w-full max-w-[60px] bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-lg hover:from-indigo-700 hover:to-indigo-500 transition-all duration-300 relative"
                        style={{ height: `${(value / maxValue) * 100}%` }}
                      >
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded whitespace-nowrap">
                          {value}{courseData.salaryGrowth.chart.unit}
                        </div>
                      </div>
                      <div className="mt-2 text-center w-full">
                        <span className="text-sm text-gray-500 whitespace-nowrap">
                          {courseData.salaryGrowth.chart.labels[index]}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Job Roles */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-gray-800">
                {courseData.jobRoles.title}
              </h3>
              <div className="space-y-4">
                {courseData.jobRoles.roles.map((role, index) => (
                  <div 
                    key={index} 
                    className="flex items-center p-4 bg-indigo-50 rounded-lg border border-indigo-100 hover:bg-indigo-100 transition-colors group"
                  >
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium group-hover:bg-indigo-700 transition-colors">
                        {index + 1}
                      </div>
                    </div>
                    <div className="text-lg font-medium text-gray-800 group-hover:text-gray-900 transition-colors">
                      {role}
                    </div>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CareerCoursePage;