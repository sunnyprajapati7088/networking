import React from 'react';

const CourseComponent = () => {
  const coursesData = [
    {
      category: "Cisco",
      courses: [
        {
          name: "CCNA",
          description: "Cisco Certified Network Associate (CCNA) is a foundational certification covering networking fundamentals, IP services, security basics, automation, and programmability. It prepares you for hands-on networking roles.",
          image: "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743435202/ccna_x20rfz.jpg",
          duration: "3-6 months",
          level: "Entry",
          salary: "₹4-8 LPA",
          demand: "High"
        },
        {
          name: "CCNP",
          description: "Cisco Certified Network Professional (CCNP) builds on CCNA skills with advanced enterprise networking, infrastructure, and automation topics, ideal for seasoned network professionals.",
          image: "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743438892/ccnp_ahqtns.jpg",
          duration: "6-12 months",
          level: "Intermediate",
          salary: "₹8-15 LPA",
          demand: "Very High"
        },
      ],
    },
    {
      category: "Microsoft",
      courses: [
        {
          name: "AZ-800/801",
          description: "Windows Server Hybrid Core Infrastructure (AZ-800/801) focuses on managing hybrid environments with on-premises and cloud components. This certification covers networking, security, and identity management.",
          image: "https://images.credly.com/images/cc3c9fd5-123a-439e-a297-e31f40b79aaa/image.png",
          duration: "4-8 months",
          level: "Intermediate",
          salary: "₹6-12 LPA",
          demand: "High"
        },
        {
          name: "Microsoft Azure Certifications",
          description: "Microsoft Azure Certifications validate your cloud expertise, ranging from development and security to architecture. They help professionals manage large-scale cloud solutions.",
          image: "https://th.bing.com/th/id/OIP.v6rlesHwf8qOadRPsUioogHaEo?rs=1&pid=ImgDetMain",
          duration: "3-9 months",
          level: "Beginner to Expert",
          salary: "₹5-20 LPA",
          demand: "Very High"
        },
      ],
    },
    {
      category: "Red Hat",
      courses: [
        {
          name: "RHCSA",
          description: "Red Hat Certified System Administrator (RHCSA) proves core Linux administration skills, including user management, file systems, and basic networking, essential for enterprise environments.",
          image: "https://www.webasha.com/uploads/course/images/633ab9d0b9e281664793040.RHCSA_Training-and-certification.jpg",
          duration: "2-4 months",
          level: "Entry",
          salary: "₹4-7 LPA",
          demand: "High"
        },
        {
          name: "RHCE",
          description: "Red Hat Certified Engineer (RHCE) is an advanced certification that focuses on automation, enterprise-level security, and network services on Linux, empowering professionals to optimize systems.",
          image: "https://www.webasha.com/uploads/course/images/633abd8d317691664793997.RHCE_Training-and-certification.jpg",
          duration: "4-8 months",
          level: "Advanced",
          salary: "₹8-14 LPA",
          demand: "Very High"
        },
      ],
    },
  ];

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

        {coursesData.map((vendor, index) => (
          <div key={index} className="mb-20">
            <div className="flex items-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800">{vendor.category}</h3>
              <div className="ml-4 h-0.5 flex-1 bg-gradient-to-r from-blue-100 to-orange-100"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {vendor.courses.map((course, courseIndex) => (
                <div 
                  key={courseIndex} 
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="relative h-48">
                    <img 
                      src={course.image} 
                      alt={course.name} 
                      className="w-full h-full object-contain rounded-t-xl"
                      loading="lazy"
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
          </div>
        ))}

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center">
            <span>View All Certifications</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseComponent;