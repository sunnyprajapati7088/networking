// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//           <Link to="/" className="flex items-center space-x-2">
//   <img 
//     src="https://res.cloudinary.com/drz6fzlpu/image/upload/v1743102748/logo_wf6fxs.jpg" 
//     alt="Institute Logo" 
//     className="h-12 w-12 md:h-14 md:w-14  border-2 border-orange-500 shadow-lg"
//   />
//   <span className="text-xl md:text-2xl font-bold text-gray-900">
//     <span className="text-orange-500">Institute</span> of Network Solution
//   </span>
// </Link>

//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6">
//             <Link to="/" className="text-gray-700 hover:text-orange-500">Home</Link>
//             <Link to="/courses" className="text-gray-700 hover:text-orange-500">Courses</Link>
//             <Link to="/plans" className="text-gray-700 hover:text-orange-500">Plans</Link>
//             <Link to="/about" className="text-gray-700 hover:text-orange-500">About</Link>
//             <Link to="/login" className="text-gray-700 hover:text-orange-500">Login</Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-gray-700 focus:outline-none"
//           >
//             ☰
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden bg-white p-4 shadow-lg">
//             <Link to="/" className="block py-2 text-gray-700 hover:text-orange-500">Home</Link>
//             <Link to="/courses" className="block py-2 text-gray-700 hover:text-orange-500">Courses</Link>
//             <Link to="/plans" className="block py-2 text-gray-700 hover:text-orange-500">Plans</Link>
//             <Link to="/about" className="block py-2 text-gray-700 hover:text-orange-500">About</Link>
//             <Link to="/login" className="block py-2 text-gray-700 hover:text-orange-500">Login</Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="https://res.cloudinary.com/drz6fzlpu/image/upload/v1743102748/logo_wf6fxs.jpg" 
                alt="Institute Logo" 
                className="h-12 w-12 md:h-14 md:w-14  border-2 border-orange-500 shadow-lg"
              />
              <span className="text-xl md:text-2xl font-bold text-gray-900">
                <span className="text-orange-500">Institute</span> of Network Solution
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-orange-500">Home</Link>
            <Link to="/courses" className="text-gray-700 hover:text-orange-500">Courses</Link>
            <Link to="/plans" className="text-gray-700 hover:text-orange-500">Plans</Link>
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
            <Link to="/courses" className="block py-2 text-gray-700 hover:text-orange-500" onClick={() => setIsOpen(false)}>Courses</Link>
            <Link to="/plans" className="block py-2 text-gray-700 hover:text-orange-500" onClick={() => setIsOpen(false)}>Plans</Link>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-orange-500" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/login" className="block py-2 text-gray-700 hover:text-orange-500" onClick={() => setIsOpen(false)}>Login</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
