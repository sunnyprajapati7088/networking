import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaPlus, FaEye, FaEdit, FaTrash } from "react-icons/fa";

const AdminDashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex h-full">
      {/* Left Sidebar (20%) */}
      <div className="w-1/5 bg-gray-900 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>

        {/* Placement Data Button */}
        <div>
          <button
            className="w-full bg-orange-500 p-2 rounded-md hover:bg-orange-600 flex justify-between"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Placement Data
          </button>

          {/* Dropdown Buttons */}
          {isDropdownOpen && (
            <div className="mt-2 space-y-2">
              <Link to="view-placement" className="block bg-gray-700 p-2 rounded-md hover:bg-gray-600 flex items-center gap-2">
                <FaEye /> View Placement
              </Link>
              <Link to="add-placement" className="block bg-gray-700 p-2 rounded-md hover:bg-gray-600 flex items-center gap-2">
                <FaPlus /> Add Placement
              </Link>
              <Link to="edit-placement" className="block bg-gray-700 p-2 rounded-md hover:bg-gray-600 flex items-center gap-2">
                <FaEdit /> Edit Placement
              </Link>
              <Link to="delete-placement" className="block bg-gray-700 p-2 rounded-md hover:bg-gray-600 flex items-center gap-2">
                <FaTrash /> Delete Placement
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Right Content (80%) */}
      <div className="w-4/5 p-6">
        <Outlet /> {/* This will load different pages based on routes */}
      </div>
    </div>
  );
};

export default AdminDashboard;
