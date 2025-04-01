import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="https://res.cloudinary.com/drz6fzlpu/image/upload/v1743360843/logo_axtiqg.png" 
                alt="Institute Logo" 
                className="h-11 md:h-12 w-[100px] md:w-[150px] lg:w-[200px]"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-gray-700 hover:text-orange-500">Home</Link>

            {/* Dropdown Menu for Courses */}
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
                className="text-gray-700 hover:text-orange-500 focus:outline-none"
              >
                Courses ▼
              </button>
              {isDropdownOpen && (
                <ul className="absolute bg-white shadow-md mt-2 w-40 border rounded-md">
                  <li>
                    <Link 
                      to="/courses/web-development" 
                      className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/courses/data-science" 
                      className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
                    >
                      Data Science
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            <Link to="/placement" className="text-gray-700 hover:text-orange-500">Placement</Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-500">About</Link>
            <Link to="/login" className="text-gray-700 hover:text-orange-500">Login</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white p-4 shadow-lg">
            <Link to="/" className="block py-2 text-gray-700 hover:text-orange-500" onClick={() => setIsOpen(false)}>Home</Link>

            {/* Mobile Dropdown */}
            <div>
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full text-left py-2 text-gray-700 hover:text-orange-500"
              >
                Courses ▼
              </button>
              {isDropdownOpen && (
                <ul className="bg-gray-100 rounded-md">
                  <li>
                    <Link 
                      to="/courses/web-development" 
                      className="block px-4 py-2 text-gray-700 hover:bg-orange-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/courses/data-science" 
                      className="block px-4 py-2 text-gray-700 hover:bg-orange-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Data Science
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            <Link to="/placement" className="block py-2 text-gray-700 hover:text-orange-500" onClick={() => setIsOpen(false)}>Placement</Link>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-orange-500" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/login" className="block py-2 text-gray-700 hover:text-orange-500" onClick={() => setIsOpen(false)}>Login</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
