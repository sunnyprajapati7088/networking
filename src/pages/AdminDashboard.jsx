// import { useState } from "react";
// import { Link, Outlet } from "react-router-dom";
// import { FaPlus, FaEye, FaEdit, FaTrash, FaBars, FaTimes } from "react-icons/fa";

// const AdminDashboard = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   // Close sidebar when a menu item is clicked (only on mobile)
//   const handleMenuClick = () => {
//     if (window.innerWidth < 1024) {
//       setIsSidebarOpen(false);
//     }
//   };

//   return (
//     <div className="flex h-screen overflow-hidden">
//       {/* Mobile Sidebar Toggle Button */}
//       <button
//         className="lg:hidden fixed top-4 left-4 z-50 text-white bg-gray-900 p-2 rounded-md shadow-lg"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`fixed lg:static w-64 lg:w-1/5 bg-gray-900 text-white p-4 transition-transform duration-300 h-full 
//         ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 z-40 shadow-lg`}
//       >
//         <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>

//         {/* Placement Data Dropdown */}
//         <div>
//           <button
//             className="w-full bg-orange-500 p-3 rounded-md hover:bg-orange-600 flex justify-between"
//             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//           >
//             Placement Data
//           </button>

//           {isDropdownOpen && (
//             <div className="mt-2 space-y-2">
//               <Link
//                 to="view-placement"
//                 className="block bg-gray-700 p-3 rounded-md hover:bg-gray-600 flex items-center gap-2"
//                 onClick={handleMenuClick} // Auto close on click
//               >
//                 <FaEye /> View Placement
//               </Link>
//               <Link
//                 to="add-placement"
//                 className="block bg-gray-700 p-3 rounded-md hover:bg-gray-600 flex items-center gap-2"
//                 onClick={handleMenuClick}
//               >
//                 <FaPlus /> Add Placement
//               </Link>
//               <Link
//                 to="edit-placement"
//                 className="block bg-gray-700 p-3 rounded-md hover:bg-gray-600 flex items-center gap-2"
//                 onClick={handleMenuClick}
//               >
//                 <FaEdit /> Edit Placement
//               </Link>
//               <Link
//                 to="delete-placement"
//                 className="block bg-gray-700 p-3 rounded-md hover:bg-gray-600 flex items-center gap-2"
//                 onClick={handleMenuClick}
//               >
//                 <FaTrash /> Delete Placement
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6 overflow-auto h-screen">
//         <Outlet /> {/* Dynamic content */}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaPlus, FaEye, FaEdit, FaTrash, FaBars, FaTimes, FaImages } from "react-icons/fa";

const AdminDashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile Sidebar Toggle Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 text-white bg-gray-900 p-2 rounded-md shadow-lg"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:static w-64 lg:w-1/5 bg-gray-900 text-white p-4 transition-transform duration-300 h-full 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 z-40 shadow-lg`}
      >
        <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>

        {/* Placement Data Dropdown */}
        <div>
          <button
            className="w-full bg-orange-500 p-3 rounded-md hover:bg-orange-600 flex justify-between"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Placement Data
          </button>

          {isDropdownOpen && (
            <div className="mt-2 space-y-2">
              <Link to="view-placement" className="block bg-gray-700 p-3 rounded-md hover:bg-gray-600 flex items-center gap-2" onClick={handleMenuClick}>
                <FaEye /> View Placement
              </Link>
              <Link to="add-placement" className="block bg-gray-700 p-3 rounded-md hover:bg-gray-600 flex items-center gap-2" onClick={handleMenuClick}>
                <FaPlus /> Add Placement
              </Link>
              <Link to="edit-placement" className="block bg-gray-700 p-3 rounded-md hover:bg-gray-600 flex items-center gap-2" onClick={handleMenuClick}>
                <FaEdit /> Edit Placement
              </Link>
              <Link to="delete-placement" className="block bg-gray-700 p-3 rounded-md hover:bg-gray-600 flex items-center gap-2" onClick={handleMenuClick}>
                <FaTrash /> Delete Placement
              </Link>
            </div>
          )}
        </div>

        {/* Carousel Data Dropdown */}
        <div className="mt-4">
          <button
            className="w-full bg-blue-500 p-3 rounded-md hover:bg-blue-600 flex justify-between"
            onClick={() => setIsCarouselOpen(!isCarouselOpen)}
          >
            Carousel Data
          </button>

          {isCarouselOpen && (
            <div className="mt-2 space-y-2">
              <Link to="view-carousel" className="block bg-gray-700 p-3 rounded-md hover:bg-gray-600 flex items-center gap-2" onClick={handleMenuClick}>
                <FaEye /> View Carousel
              </Link>
              <Link to="add-carousel" className="block bg-gray-700 p-3 rounded-md hover:bg-gray-600 flex items-center gap-2" onClick={handleMenuClick}>
                <FaPlus /> Add Carousel
              </Link>
              <Link to="edit-carousel" className="block bg-gray-700 p-3 rounded-md hover:bg-gray-600 flex items-center gap-2" onClick={handleMenuClick}>
                <FaEdit /> Edit Carousel
              </Link>
              <Link to="delete-carousel" className="block bg-gray-700 p-3 rounded-md hover:bg-gray-600 flex items-center gap-2" onClick={handleMenuClick}>
                <FaTrash /> Delete Carousel
              </Link>
            </div>
          )}
        </div>
         <div className="mt-4">
          <Link to={"/admin/AdminCoursePanel"}
            className="w-full bg-blue-500 p-3 rounded-md hover:bg-blue-600 flex justify-between"
            onClick={() => setIsCarouselOpen(!isCarouselOpen)}
          >
           AdminCoursePanel
          </Link>

        
        </div>
        <div className="mt-4">
          <Link to={"/admin/signup"}
            className="w-full bg-blue-500 p-3 rounded-md hover:bg-blue-600 flex justify-between"
           
          >
            SignUp
          </Link>

        
        </div>
        <div className="mt-4">
          <Link to={"/admin/feedback"}
            className="w-full bg-blue-500 p-3 rounded-md hover:bg-blue-600 flex justify-between"
           
          >
            Admin Feedback
          </Link>

        
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto h-screen">
        <Outlet /> {/* Dynamic content */}
      </div>
    </div>
  );
};

export default AdminDashboard;
