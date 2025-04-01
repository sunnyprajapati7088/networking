// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import Login from './Login'; // Import the Login component

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showLogin, setShowLogin] = useState(false); // State for controlling login visibility

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <img 
//               src="https://res.cloudinary.com/drz6fzlpu/image/upload/v1743360843/logo_axtiqg.png" 
//               alt="Institute Logo" 
//               className="h-12 md:h-14 w-auto"
//             />
//           </Link>
          
//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-8 items-center">
//             <Link to="/" className="text-gray-700 hover:text-orange-500 font-medium text-[20px]">Home</Link>
//             <Link to="/placement" className="text-gray-700 hover:text-orange-500 font-medium text-[20px]">Placement</Link>
//             <Link to="/about" className="text-gray-700 hover:text-orange-500 font-medium text-[20px]">About</Link>
//             <button 
//               onClick={() => setShowLogin(true)} // Show login form
//               className="text-gray-700 hover:text-orange-500 font-medium text-[20px]"
//             >
//               Login
//             </button>
//           </div>
          
//           {/* Mobile Menu Button */}
//           <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700 focus:outline-none">
//             {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden bg-white p-4 shadow-lg border-t border-gray-200">
//             <Link to="/" className="block py-2 text-gray-700 hover:text-orange-500" onClick={() => setIsOpen(false)}>Home</Link>
//             <Link to="/placement" className="block py-2 text-gray-700 hover:text-orange-500" onClick={() => setIsOpen(false)}>Placement</Link>
//             <Link to="/about" className="block py-2 text-gray-700 hover:text-orange-500" onClick={() => setIsOpen(false)}>About</Link>
//             <button 
//               onClick={() => setShowLogin(true)} // Show login form
//               className="block py-2 text-gray-700 hover:text-orange-500" 
//             >
//               Login
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Show login form when state is true */}
//       {showLogin && <Login setShowLogin={setShowLogin} />}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Login from './Login'; // Import the Login component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // State for controlling login visibility
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for the dropdown menu

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="https://res.cloudinary.com/drz6fzlpu/image/upload/v1743360843/logo_axtiqg.png" 
              alt="Institute Logo" 
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-orange-500 font-medium text-[20px]">Home</Link>
            <Link to="/placement" className="text-gray-700 hover:text-orange-500 font-medium text-[20px]">Placement</Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-500 font-medium text-[20px]">About</Link>

            {/* Dropdown Menu */}
            <div className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)} 
                className="block py-2 text-gray-700 w-full text-left hover:text-orange-500 focus:outline-none"
              >
                Courses
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg z-50 w-48">
                  <Link 
                    to="/courses" 
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-500 hover:text-white" 
                    onClick={() => setIsOpen(false)}
                  >
                    All Courses
                  </Link>
                  <Link 
                    to="/course1" 
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-500 hover:text-white" 
                    onClick={() => setIsOpen(false)}
                  >
                    Web Development
                  </Link>
                  <Link 
                    to="/course2" 
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-500 hover:text-white" 
                    onClick={() => setIsOpen(false)}
                  >
                    Network Security
                  </Link>
                </div>
              )}
            </div>

            <button 
              onClick={() => setShowLogin(true)} // Show login form
              className="text-gray-700 hover:text-orange-500 font-medium text-[20px]"
            >
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white p-4 shadow-lg border-t border-gray-200">
            <Link to="/" className="block py-2 text-gray-700 hover:text-orange-500" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/placement" className="block py-2 text-gray-700 hover:text-orange-500" onClick={() => setIsOpen(false)}>Placement</Link>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-orange-500" onClick={() => setIsOpen(false)}>About</Link>

            {/* Dropdown Menu for Mobile */}
            <div className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)} 
                className="block py-2 text-gray-700 w-full text-left hover:text-orange-500"
              >
                Courses
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg z-50 w-48">
                  <Link 
                    to="/courses" 
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-500 hover:text-white" 
                    onClick={() => setIsOpen(false)}
                  >
                    All Courses
                  </Link>
                  <Link 
                    to="/course1" 
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-500 hover:text-white" 
                    onClick={() => setIsOpen(false)}
                  >
                    Web Development
                  </Link>
                  <Link 
                    to="/course2" 
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-500 hover:text-white" 
                    onClick={() => setIsOpen(false)}
                  >
                    Network Security
                  </Link>
                </div>
              )}
            </div>

            <button 
              onClick={() => setShowLogin(true)} // Show login form
              className="block py-2 text-gray-700 hover:text-orange-500" 
            >
              Login
            </button>
          </div>
        )}
      </div>

      {/* Show login form when state is true */}
      {showLogin && <Login setShowLogin={setShowLogin} />}
    </nav>
  );
};

export default Navbar;

