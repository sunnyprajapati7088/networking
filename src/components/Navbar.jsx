

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import Login from './Login'; // Import the Login component

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showLogin, setShowLogin] = useState(false); // State for controlling login visibility
//   const [dropdownOpen, setDropdownOpen] = useState(false); // State for the dropdown menu

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
//             <div className="relative">
//               <button 
//                 onClick={() => setDropdownOpen(!dropdownOpen)}   
//                 className="block py-2 text-gray-700 w-full text-left hover:text-orange-500 focus:outline-none font-medium text-[20px]"
//               >
//                 Courses
//               </button>
//               {dropdownOpen && (
//                 <div className="absolute left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg z-50 w-48">
                  
//                   <Link 
//                     to="/CareerCoursePage" 
//                     className="block px-4 py-2 text-gray-700 hover:bg-orange-500 hover:text-white" 
//                     onClick={() => setIsOpen(false)}
//                   >
//                    Career courses

//                   </Link>
//                   <Link 
//                     to="/CourseComponent" 
//                     className="block px-4 py-2 text-gray-700 hover:bg-orange-500 hover:text-white" 
//                     onClick={() => setIsOpen(false)}
//                   >
//                     Modular courses
//                   </Link>
//                 </div>
//               )}
//             </div>

//             <Link to="/placement" className="text-gray-700 hover:text-orange-500 font-medium text-[20px]">Placement</Link>
//             <Link to="/about" className="text-gray-700 hover:text-orange-500 font-medium text-[20px]">About</Link>

//             {/* Dropdown Menu */}
           
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

//             {/* Dropdown Menu for Mobile */}
//             <div className="relative">
//               <button 
//                 onClick={() => setDropdownOpen(!dropdownOpen)} 
//                 className="block py-2 text-gray-700 w-full text-left hover:text-orange-500"
//               >
//                 Courses
//               </button>
//               {dropdownOpen && (
//                 <div className="absolute left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg z-50 w-48">
                  
//                   <Link 
//                     to="/CourseComponent" 
//                     className="block px-4 py-2 text-gray-700 hover:bg-orange-500 hover:text-white" 
//                     onClick={() => setIsOpen(false)}
//                   > Modular courses
//                   </Link>
//                   <Link 
//                     to="/CareerCoursePage" 
//                     className="block px-4 py-2 text-gray-700 hover:bg-orange-500 hover:text-white" 
//                     onClick={() => setIsOpen(false)}
//                   >
                    
//                    Career courses
//                   </Link>
//                 </div>
//               )}
//             </div>

//             <button 
//               onClick={() => {setShowLogin(true),setDropdownOpen(!dropdownOpen)}} // Show login form
            
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




import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaSearch, FaUser, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Login from './Login';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef(null);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target) && window.innerWidth < 768) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeAllMenus = () => {
    setIsOpen(false);
    setDropdownOpen(false);
    setSearchOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      closeAllMenus();
      setSearchQuery("");
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
            onClick={closeAllMenus}
          >
            <motion.img 
              src="https://res.cloudinary.com/drz6fzlpu/image/upload/v1743360843/logo_axtiqg.png" 
              alt="Institute Logo" 
              className="h-12 md:h-14 w-auto transition-transform group-hover:scale-105"
              whileHover={{ scale: 1.05 }}
            />
            <span className="hidden md:block text-xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              INS Academy
            </span>
          </Link>

          {/* Desktop Search */}
          <motion.div 
            className="hidden md:flex flex-1 max-w-xl mx-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <form onSubmit={handleSearch} className="w-full relative">
              <input
                type="text"
                placeholder="Search courses, programs..."
                className="w-full py-2.5 px-5 pr-12 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent shadow-sm transition-all duration-300 hover:shadow-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-orange-500 transition-colors"
              >
                <FaSearch />
              </button>
            </form>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" onClick={closeAllMenus}>Home</NavLink>
            
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}   
                className="flex items-center px-4 py-3 text-gray-700 hover:text-orange-500 font-medium transition-colors"
              >
                Courses
                <motion.span
                  animate={{ rotate: dropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-1"
                >
                  <FaChevronDown size={14} />
                </motion.span>
              </button>
              
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 bg-white rounded-xl shadow-xl z-50 w-56 overflow-hidden border border-gray-100"
                  >
                    <Link 
                      to="/CareerCoursePage" 
                      className="block px-5 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors border-b border-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <span className="font-medium">Career Courses</span>
                      <p className="text-xs text-gray-500 mt-1">Job-focused programs</p>
                    </Link>
                    <Link 
                      to="/CourseComponent" 
                      className="block px-5 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <span className="font-medium">Modular Courses</span>
                      <p className="text-xs text-gray-500 mt-1">Skill-specific training</p>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/placement" onClick={closeAllMenus}>Placement</NavLink>
            <NavLink to="/about" onClick={closeAllMenus}>About</NavLink>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowLogin(true)}
              className="ml-4 flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <FaUser size={14} />
              <span>Login</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gray-600 hover:text-orange-500 p-2 rounded-full bg-gray-50"
            >
              <FaSearch size={18} />
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-orange-500 p-2 rounded-full bg-gray-50"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Search - Only appears when search icon clicked */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
              ref={searchRef}
            >
              <form onSubmit={handleSearch} className="px-2 py-3">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search courses..."
                    className="w-full py-2.5 px-4 pr-10 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent shadow-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                  <button 
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-orange-500"
                  >
                    <FaSearch />
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white shadow-xl rounded-b-lg overflow-hidden"
            >
              <div className="px-4 py-3 space-y-1">
                <MobileNavLink to="/" onClick={closeAllMenus}>Home</MobileNavLink>
                
                <div className="relative">
                  <button 
                    onClick={() => setDropdownOpen(!dropdownOpen)} 
                    className="flex justify-between items-center w-full px-4 py-3 text-left text-gray-700 hover:text-orange-500 font-medium"
                  >
                    <span>Courses</span>
                    <motion.span
                      animate={{ rotate: dropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaChevronDown size={14} />
                    </motion.span>
                  </button>
                  
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-6 space-y-1 overflow-hidden"
                      >
                        <MobileNavLink 
                          to="/CareerCoursePage" 
                          onClick={closeAllMenus}
                          className="text-sm"
                        >
                          Career Courses
                        </MobileNavLink>
                        <MobileNavLink 
                          to="/CourseComponent" 
                          onClick={closeAllMenus}
                          className="text-sm"
                        >
                          Modular Courses
                        </MobileNavLink>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <MobileNavLink to="/placement" onClick={closeAllMenus}>Placement</MobileNavLink>
                <MobileNavLink to="/about" onClick={closeAllMenus}>About</MobileNavLink>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { setShowLogin(true); closeAllMenus(); }}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3 rounded-lg mt-2 shadow-md"
                >
                  <FaUser size={14} />
                  <span>Login</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Login Modal */}
      {showLogin && <Login setShowLogin={setShowLogin} />}
    </nav>
  );
};

// Reusable NavLink component
const NavLink = ({ to, onClick, children }) => (
  <Link
    to={to}
    onClick={onClick}
    className="px-4 py-3 text-gray-700 hover:text-orange-500 font-medium transition-colors relative group"
  >
    {children}
    <motion.span
      className="absolute bottom-1 left-0 h-0.5 bg-orange-500 w-0 group-hover:w-full transition-all duration-300"
      initial={{ width: 0 }}
      whileHover={{ width: "100%" }}
    />
  </Link>
);

// Reusable Mobile NavLink component
const MobileNavLink = ({ to, onClick, children, className = "" }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`block px-4 py-3 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-600 font-medium transition-colors ${className}`}
  >
    {children}
  </Link>
);

export default Navbar;