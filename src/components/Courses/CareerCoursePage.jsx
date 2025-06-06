

// import React from 'react';
// import { Link } from 'react-router-dom';


// const CareerCoursePage = () => {
//   // All data organized in JSON format
//   const courseData = {
//     heroSection: {
//       title: "100% Job guarantee",
//       subtitle: "Boost your career with INS job guarantee courses",
//       description: "No IT background? No problem! BA, B Com., BSc graduates can become network engineer in 1 year!",
//       highlights: [
//         "Network engineers are the backbone of the digital world",
//         "High demand",
//         "High salary",
//         "High growth!"
//       ],
//       brochureImages: [
//         "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743672940/ftezyhs5c1foz93mzmwu.jpg",
//         "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743672860/dffrxqazirxolmyflmnk.jpg"
//       ]
//     },
//     programOverview: {
//       title: "ACNP (Advance computer network professional)",
//       subtitle: "Why enroll in the ACNP program? Master IT, networking & career growth – all in one program!",
//       modules: [
//         {
//           column1: [
//             "Know your PC",
//             "Microsoft-MCWSA",
//             "Cloud computing",
//             "Resume building"
//           ],
//           column2: [
//             "CompTIA Network+",
//             "Redhat-RHCSA",
//             "Firewall network security",
//             "Interview preparation"
//           ],
//           column3: [
//             "Cisco-CCNA",
//             "Advanced tech. module",
//             "LinkedIn profile optimization",
//             "Personality development"
//           ]
//         }
//       ],
//       description: "Start from basics, become an expert – your future in networking!",
//       guarantee: "100% job placement guarantee at starting package of 3-12 lacs per annum after ACNP training from INS-Jaipur!!",
//       certifications: [
//         "CompTIA",
//         "Microsoft",
//         "Redhat",
//         "AWS"
//       ]
//     },
//     process: {
//       title: "This is how our training and placement process works!",
//       steps: [
//         "Enroll in the ACNP course @ INS",
//         "Get IT & networking training",
//         "Develop soft skills",
//         "Attend interview preparation classes",
//         "Get interview opportunities from our placement team",
//         "Get placed @3-12 lacs package & start your IT career!"
//       ]
//     },
//     jobReady: {
//       title: "We make you job ready!",
//       description: "Along with ACNP technical training, we also provide free soft skills & professional development classes daily to prepare you for the IT industry",
//       features: [
//         "Professional grooming & confidence building",
//         "Group discussions & team collaboration",
//         "Communication skills & spoken English",
//         "Resume writing & interview preparation",
//         "Hands-on practice in real labs",
//         "Program tracking assignments & guidance from industry experts"
//       ]
//     },
//     salaryGrowth: {
//       title: "ACNP boosts your career & salary",
//       chart: {
//         labels: ["Before ACNP", "1 Year", "2 Years", "5 Years", "7 Years", "10 Years", "15 Years"],
//         values: [3, 8, 15, 25, 35, 45, 50], // in LPA
//         colors: ["#818CF8", "#6366F1", "#4F46E5", "#4338CA", "#3730A3", "#312E81", "#1E1B4B"],
//         unit: "LPA"
//       },
//       note: "Average salary package growth chart"
//     },
//     jobRoles: {
//       title: "Get job roles after ACNP",
//       roles: [
//         "IT support specialist",
//         "Network engineer",
//         "System administrator",
//         "Cloud engineer", 
//         "Server administrator",
//         "Network security engineer"
//       ]
//     }
//   };

//   const maxValue = Math.max(...courseData.salaryGrowth.chart.values);

//   const darkenColor = (hex, percent) => {
//     hex = hex.replace('#', '');
    
//     const r = parseInt(hex.substring(0, 2), 16);
//     const g = parseInt(hex.substring(2, 4), 16);
//     const b = parseInt(hex.substring(4, 6), 16);
  
//     const darkened = (color) => Math.max(0, Math.min(255, Math.floor(color * (100 - percent) / 100)));
  
//     return `#${[
//       darkened(r).toString(16).padStart(2, '0'),
//       darkened(g).toString(16).padStart(2, '0'),
//       darkened(b).toString(16).padStart(2, '0')
//     ].join('')}`;
//   };
//   return (
//     <div className="font-sans bg-gray-50 antialiased">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto text-center">
//           <div className="mb-2">
//             <span className="inline-block bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
//               TRUSTED BY 10,000+ STUDENTS
//             </span>
//           </div>
//           <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
//             {courseData.heroSection.title}
//           </h1>
//           <p className="text-xl sm:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
//             {courseData.heroSection.subtitle}
//           </p>
//           <p className="text-lg sm:text-xl mb-12 max-w-3xl mx-auto opacity-90">
//             {courseData.heroSection.description}
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
//             {courseData.heroSection.highlights.map((highlight, index) => (
//               <div 
//                 key={index} 
//                 className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
//               >
//                 <p className="font-semibold text-center text-lg">{highlight}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Program Overview */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold mb-4 text-gray-900">
//               {courseData.programOverview.title}
//             </h2>
//             <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
//             <p className="text-xl text-gray-600 max-w-4xl mx-auto">
//               {courseData.programOverview.subtitle}
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//             {Object.values(courseData.programOverview.modules[0]).map((column, colIndex) => (
//               <div 
//                 key={colIndex} 
//                 className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
//               >
//                 <ul className="space-y-4">
//                   {column.map((item, itemIndex) => (
//                     <li key={itemIndex} className="flex items-start">
//                       <span className="text-indigo-600 mr-3 mt-1">
//                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                         </svg>
//                       </span>
//                       <span className="text-gray-700 text-lg">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mb-16">
//             <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
//               {courseData.programOverview.description}
//             </p>
//             <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 inline-block max-w-2xl">
//               <p className="text-xl font-bold text-indigo-700">
//                 {courseData.programOverview.guarantee}
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold text-gray-900">
//               {courseData.process.title}
//             </h2>
//             <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4"></div>
//           </div>
          
//           <div className="space-y-10 relative">
//             {/* Vertical line */}
//             <div className="hidden md:block absolute left-8 h-full w-0.5 bg-indigo-200 top-4"></div>
            
//             {courseData.process.steps.map((step, index) => (
//               <div key={index} className="relative pl-12 md:pl-24">
//                 {/* Number circle */}
//                 <div className="absolute left-0 md:left-16 top-0 w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xl shadow-md">
//                   {index + 1}
//                 </div>
//                 <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-indigo-600 hover:shadow-md transition-all">
//                   <p className="text-lg font-medium text-gray-800 leading-relaxed">
//                     {step}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Salary Growth Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold text-gray-900">
//               {courseData.salaryGrowth.title}
//             </h2>
//             <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4 mb-8"></div>
//             <p className="text-lg text-gray-600 mb-12">
//               {courseData.salaryGrowth.note}
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             {/* Pillar Graph Visualization */}
//             <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm">
//               <div className="h-96 flex items-end justify-center space-x-2 sm:space-x-4">
//                 {courseData.salaryGrowth.chart.values.map((value, index) => (
//                   <div key={index} className="flex flex-col items-center w-12 sm:w-16">
//                     <div 
//                       className="w-full rounded-t-lg relative transition-all duration-300 hover:opacity-90"
//                       style={{ 
//                         height: `${(value / maxValue) * 100}%`,
//                         background: `linear-gradient(to top, ${courseData.salaryGrowth.chart.colors[index]}, ${darkenColor(courseData.salaryGrowth.chart.colors[index], 10)})`,
//                         boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
//                       }}
//                     >
//                       <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded whitespace-nowrap">
//                         {value}{courseData.salaryGrowth.chart.unit}
//                       </div>
//                     </div>
//                     <div className="mt-4 text-center w-full">
//                       <span className="text-sm font-medium text-gray-700">
//                         {courseData.salaryGrowth.chart.labels[index]}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="mt-8 text-center text-sm text-gray-500">
//                 * Salary figures based on industry averages for ACNP-certified professionals
//               </div>
//             </div>
            
//             {/* Job Roles */}
//             <div>
//               <h3 className="text-2xl font-semibold mb-8 text-gray-800">
//                 {courseData.jobRoles.title}
//               </h3>
//               <div className="space-y-4">
//                 {courseData.jobRoles.roles.map((role, index) => (
//                   <div 
//                     key={index} 
//                     className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:bg-indigo-50 transition-colors group shadow-sm hover:shadow-md"
//                   >
//                     <div className="flex-shrink-0 mr-4">
//                       <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium group-hover:bg-indigo-700 transition-colors">
//                         {index + 1}
//                       </div>
//                     </div>
//                     <div className="text-lg font-medium text-gray-800 group-hover:text-gray-900 transition-colors">
//                       {role}
//                     </div>
//                     <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
//                       <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                       </svg>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Job Ready Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold text-gray-900">
//               {courseData.jobReady.title}
//             </h2>
//             <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4 mb-8"></div>
//             <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//               {courseData.jobReady.description}
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {courseData.jobReady.features.map((feature, index) => (
//               <div 
//                 key={index} 
//                 className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-indigo-100"
//               >
//                 <div className="text-indigo-600 text-3xl mb-4">
//                   <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-gray-800">
//                   {feature.split('&')[0].trim()}
//                 </h3>
//                 {feature.includes('&') && (
//                   <p className="text-gray-600 leading-relaxed">
//                     {feature.split('&')[1].trim()}
//                   </p>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-900 text-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Career?</h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
//             Join our ACNP program today and secure your future in the high-growth networking industry!
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <a
//               href="/ACNP.pdf"
//               download="ACNP.pdf"
//               className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:bg-opacity-10 transition-colors flex items-center justify-center"
//             >
//               <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
//               </svg>
//               Download Brochure (PDF)
//             </a>
//             {/* <Link
//               to="/enroll"
//               className="bg-white text-indigo-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
//             >
//               Enroll Now
//             </Link> */}
          
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CareerCoursePage;


import React from 'react';
import { Link } from 'react-router-dom';

const CareerCoursePage = () => {
  // All data organized in JSON format
  const courseData = {
    heroSection: {
      title: "100% Job guarantee",
      subtitle: "Boost your career with INS job guarantee courses",
      description: "No IT background? No problem! BA, B Com., BSc graduates can become network engineer in 1 year!",
      highlights: [
        "Network engineers are the backbone of the digital world",
        "High demand",
        "High salary",
        "High growth!"
      ],
      brochureImages: [
        "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743672940/ftezyhs5c1foz93mzmwu.jpg",
        "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743672860/dffrxqazirxolmyflmnk.jpg"
      ]
    },
    programOverview: {
      title: "ACNP (Advance computer network professional)",
      subtitle: "Why enroll in the ACNP program? Master IT, networking & career growth – all in one program!",
      modules: [
        {
          column1: [
            "Know your PC",
            "Microsoft-MCWSA",
            "Cloud computing",
            "Resume building"
          ],
          column2: [
            "CompTIA Network+",
            "Redhat-RHCSA",
            "Firewall network security",
            "Interview preparation"
          ],
          column3: [
            "Cisco-CCNA",
            "Advanced tech. module",
            "LinkedIn profile optimization",
            "Personality development"
          ]
        }
      ],
      description: "Start from basics, become an expert – your future in networking!",
      guarantee: "100% job placement guarantee at starting package of 3-12 lacs per annum after ACNP training from INS-Jaipur!!",
      certifications: [
        "CompTIA",
        "Microsoft",
        "Redhat",
        "AWS"
      ]
    },
    process: {
      title: "This is how our training and placement process works!",
      steps: [
        "Enroll in the ACNP course @ INS",
        "Get IT & networking training",
        "Develop soft skills",
        "Attend interview preparation classes",
        "Get interview opportunities from our placement team",
        "Get placed @3-12 lacs package & start your IT career!"
      ]
    },
    jobReady: {
      title: "We make you job ready!",
      description: "Along with ACNP technical training, we also provide free soft skills & professional development classes daily to prepare you for the IT industry",
      features: [
        "Professional grooming & confidence building",
        "Group discussions & team collaboration",
        "Communication skills & spoken English",
        "Resume writing & interview preparation",
        "Hands-on practice in real labs",
        "Program tracking assignments & guidance from industry experts"
      ]
    },
    salaryGrowth: {
      title: "ACNP boosts your career & salary",
      chart: {
        labels: ["Before ACNP", "1 Year", "2 Years", "5 Years", "7 Years", "10 Years", "15 Years"],
        values: [3, 8, 15, 25, 35, 45, 50], // in LPA
        colors: ["#818CF8", "#6366F1", "#4F46E5", "#4338CA", "#3730A3", "#312E81", "#1E1B4B"],
        unit: "LPA"
      },
      note: "Average salary package growth chart"
    },
    jobRoles: {
      title: "Get job roles after ACNP",
      roles: [
        "IT support specialist",
        "Network engineer",
        "System administrator",
        "Cloud engineer", 
        "Server administrator",
        "Network security engineer"
      ]
    }
  };

  const maxValue = Math.max(...courseData.salaryGrowth.chart.values);

  const darkenColor = (hex, percent) => {
    hex = hex.replace('#', '');
    
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
  
    const darkened = (color) => Math.max(0, Math.min(255, Math.floor(color * (100 - percent) / 100)));
  
    return `#${[
      darkened(r).toString(16).padStart(2, '0'),
      darkened(g).toString(16).padStart(2, '0'),
      darkened(b).toString(16).padStart(2, '0')
    ].join('')}`;
  };

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

          {/* Added new image here */}
          <div className="mb-16 rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://res.cloudinary.com/drz6fzlpu/image/upload/v1743867627/psvlalkflfimiajbymdq.png" 
              alt="ACNP Program Overview" 
              className="w-full h-auto object-cover"
            />
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

      {/* Salary Growth Section */}
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
          
        

          {/* Added second image here */}
          <div className="mt-16 rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://res.cloudinary.com/drz6fzlpu/image/upload/v1743867678/lmnvewidpxmpimdtbl1x.png" 
              alt="Career Growth with ACNP" 
              className="w-full h-auto object-cover"
            />
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
            <a
              href="/ACNP.pdf"
              download="ACNP.pdf"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:bg-opacity-10 transition-colors flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Brochure (PDF)
            </a>
            <Link
              to="/enroll"
              className="bg-white text-indigo-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerCoursePage;