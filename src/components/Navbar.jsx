
import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaSearch, FaUser, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import Login from './Login';
import Signup from "../pages/Signup";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSignup,setShowSignup]=useState(false);
  const dropdownRef = useRef(null);
  const searchRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
     
    };

  }, []);

  const closeAllMenus = () => {
    setIsOpen(false);
    setDropdownOpen(false);
    setSearchOpen(false);
  };

  const handleSearch = (e) => {
  
  };

  const handleMobileLinkClick = (e) => {
    // Ensure the link isn't part of the dropdown toggle
    if (!e.target.closest('.dropdown-toggle')) {
      closeAllMenus();
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            onClick={closeAllMenus}
          >
            <img 
              src="https://res.cloudinary.com/drz6fzlpu/image/upload/v1743360843/logo_axtiqg.png" 
              alt="Institute Logo" 
              className="h-12 md:h-14 lg:w-[150px]"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-orange-500 px-3 py-2 transition-colors" onClick={closeAllMenus}>
              Home
            </Link>
            
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}   
                className="flex items-center px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors"
              >
                Courses
                <FaChevronDown size={14} className={`ml-1 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 bg-white rounded-md shadow-lg z-50 w-48 border border-gray-200">
                  <Link 
                    to="/CareerCoursePage" 
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    onClick={closeAllMenus}
                  >
                    Career Courses
                  </Link>
                  <Link 
                    to="/CourseComponent" 
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    onClick={closeAllMenus}
                  >
                    Modular Courses
                  </Link>
                </div>
              )}
            </div>

            <Link to="/placement" className="text-gray-700 hover:text-orange-500 px-3 py-2 transition-colors" onClick={closeAllMenus}>
              Placement
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-500 px-3 py-2 transition-colors" onClick={closeAllMenus}>
              About
            </Link>

            <button
              onClick={() => setShowLogin(true)}
              className="ml-4 flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors"
            >
              <FaUser size={14} />
              <span>Login</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gray-600 hover:text-orange-500 p-2"
            >
              <FaSearch size={18} />
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-button text-gray-600 hover:text-orange-500 p-2"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="md:hidden px-2 py-3" ref={searchRef}>
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
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
            </form>
          </div>
        )}

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white shadow-lg rounded-b-lg overflow-hidden"
              ref={mobileMenuRef}
            >
              <div className="px-4 py-3 space-y-2" onClick={handleMobileLinkClick}>
                <Link to="/" className="block px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded">
                  Home
                </Link>
                <Link 
                          to="/CareerCoursePage" 
                          className="block px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded"g
                          onClick={(e) => {
                            e.stopPropagation();
                            closeAllMenus();
                          }}
                          >
                          Career Courses
                        </Link>
                        <Link 
                          to="/CourseComponent" 
                          className="block px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded"
                        >
                          Modular Courses
                        </Link>
               

                <Link to="/placement" className="block px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded">
                  Placement
                </Link>
                <Link to="/about" className="block px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded">
                  About
                </Link>

                <button
                  onClick={() => { setShowLogin(true); closeAllMenus(); }}
                  className="w-full flex items-center justify-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-orange-600"
                >
                  <FaUser size={14} />
                  <span>Login</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Login Modal */}
      {showLogin && <Login setShowLogin={setShowLogin}  setShowSignup={setShowSignup} />}
      {showSignup && <Signup setShowSignup={setShowSignup} />}
    </nav>
  );
};

export default Navbar;