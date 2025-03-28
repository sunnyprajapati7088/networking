import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

// JSON structure with course categories, each with an extended description and image
const coursesData = [
    {
      category: "Cisco",
      courses: [
        {
          name: "CCNA",
          description:
            "Cisco Certified Network Associate (CCNA) is a foundational certification covering networking fundamentals, IP services, security basics, automation, and programmability. It prepares you for hands-on networking roles.",
          image: "https://th.bing.com/th/id/OIP.liRjX-jYpnhWj_Axsl4KoAHaEK?w=314&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        },
        {
          name: "CCNP",
          description:
            "Cisco Certified Network Professional (CCNP) builds on CCNA skills with advanced enterprise networking, infrastructure, and automation topics, ideal for seasoned network professionals.",
          image: "https://unremot.com/blog/wp-content/uploads/2022/08/ccnp.jpg",
        },
      ],
    },
    {
      category: "Microsoft",
      courses: [
        {
          name: "AZ-800/801",
          description:
            "Windows Server Hybrid Core Infrastructure (AZ-800/801) focuses on managing hybrid environments with on-premises and cloud components. This certification covers networking, security, and identity management.",
          image: "https://images.credly.com/images/cc3c9fd5-123a-439e-a297-e31f40b79aaa/image.png",
        },
        {
          name: "Microsoft Azure Certifications",
          description:
            "Microsoft Azure Certifications validate your cloud expertise, ranging from development and security to architecture. They help professionals manage large-scale cloud solutions.",
          image: "https://th.bing.com/th/id/OIP.v6rlesHwf8qOadRPsUioogHaEo?rs=1&pid=ImgDetMain",
        },
      ],
    },
    {
      category: "Red Hat",
      courses: [
        {
          name: "RHCSA",
          description:
            "Red Hat Certified System Administrator (RHCSA) proves core Linux administration skills, including user management, file systems, and basic networking, essential for enterprise environments.",
          image: "https://www.webasha.com/uploads/course/images/633ab9d0b9e281664793040.RHCSA_Training-and-certification.jpg",
        },
        {
          name: "RHCE",
          description:
            "Red Hat Certified Engineer (RHCE) is an advanced certification that focuses on automation, enterprise-level security, and network services on Linux, empowering professionals to optimize systems.",
          image: "https://www.webasha.com/uploads/course/images/633abd8d317691664793997.RHCE_Training-and-certification.jpg",
        },
      ],
    },
  ];
const Landing = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Best IT & Networking Courses | RoboGen</title>
        <meta name="description" content="Learn top courses like CCNA, Azure, and RHCSA with expert guidance. Join RoboGen for hands-on training." />
        <meta name="keywords" content="CCNA, CCNP, Azure, Linux, RHCSA, Cloud Computing, Networking" />
        <meta name="author" content="RoboGen" />
        <meta property="og:title" content="Best IT & Networking Courses | RoboGen" />
        <meta property="og:description" content="Get certified in top IT courses including Cisco, Microsoft, and Red Hat. Learn from industry experts." />
        <meta property="og:image" content="https://source.unsplash.com/500x400/?technology,education" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10 p-6 bg-white shadow-lg rounded-lg"
        style={{ minHeight: "80vh" }}
      >
        {/* Left Side: Animated Description */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800">
            Learn with <span className="text-orange-500">Master Networking & IT with Expert Training!</span>
          </h1>
          <p className="text-gray-600 mt-3">
          join the Institute of Network Solution, your gateway to Cisco, Microsoft, Red Hat, AWS, and more! Get industry-recognized certifications and boost your career.
          </p>
          <button className="mt-4 bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
            Explore Courses
          </button>
        </div>

        {/* Right Side: Animated Image */}
        <motion.img
          src="https://res.cloudinary.com/drz6fzlpu/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1743102748/logo_wf6fxs.jpg"
          alt="AI Learning"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 rounded-lg shadow-lg max-w-xs md:max-w-sm"
        />
      </motion.div>

     <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10 p-6 bg-white shadow-lg rounded-lg"
      style={{ minHeight: "80vh" }}
    >
      <div className="mt-10 w-full max-w-6xl px-4 md:px-8 mx-auto">
        {coursesData.map((category) => (
          <motion.div
            key={category.category}
            className="bg-white shadow-lg rounded-xl p-8 mb-12 border border-gray-200"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* Category Title */}
            <h2 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-6">
              {category.category} Courses
            </h2>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {category.courses.map((course, idx) => (
                <motion.div
                  key={course.name}
                  className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
                  initial={{ opacity: 0, y: 50 }} // Applied animation
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  {/* Course Image */}
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-28 h-28 object-cover rounded-md shadow-sm border border-gray-300 transition-all duration-700"
                  />

                  {/* Course Info */}
                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-gray-700">{course.name}</h3>
                    <p className="text-gray-600 text-sm mt-2">{course.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  


    </div>
  );
};

export default Landing;
