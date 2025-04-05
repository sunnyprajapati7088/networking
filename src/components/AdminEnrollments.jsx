import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = "https://lms-backend-f9h3.onrender.com/api";

const AdminEnrollments = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [selectedEnrollment, setSelectedEnrollment] = useState(null);
  const [updatedData, setUpdatedData] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    fetchEnrollments();
  }, []);

  // ✅ Fetch all enrollments
  const fetchEnrollments = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/enrollments`);
      setEnrollments(response.data);
    } catch (error) {
      console.error("Error fetching enrollments:", error);
    }
  };

  // ✅ Delete an enrollment
  const deleteEnrollment = async (id) => {
    if (!window.confirm("Are you sure you want to delete this enrollment?")) return;
    try {
      await axios.delete(`${API_BASE_URL}/enrollments/${id}`);
      alert("Enrollment deleted successfully!");
      fetchEnrollments(); // Refresh list
    } catch (error) {
      console.error("Error deleting enrollment:", error);
    }
  };

  // ✅ Select an enrollment to update
  const selectEnrollment = (enrollment) => {
    setSelectedEnrollment(enrollment);
    setUpdatedData({ name: enrollment.name, email: enrollment.email, phone: enrollment.phone });
  };

  // ✅ Handle input changes
  const handleChange = (e) => {
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
  };

  // ✅ Update an enrollment
  const updateEnrollment = async () => {
    try {
      await axios.put(`${API_BASE_URL}/enrollments/${selectedEnrollment._id}`, updatedData);
      alert("Enrollment updated successfully!");
      setSelectedEnrollment(null);
      fetchEnrollments();
    } catch (error) {
      console.error("Error updating enrollment:", error);
    }
  };

  return (
    <div className="p-6 text-black">
      <h2 className="text-2xl font-bold mb-4">Admin - Manage Enrollments</h2>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Course</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Phone</th>
            <th className="border border-gray-300 p-2">Enroll Date</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {enrollments.map((enrollment) => (
            <tr key={enrollment._id} className="border border-gray-300">
              <td className="border border-gray-300 p-2">{enrollment.course}</td>
              <td className="border border-gray-300 p-2">{enrollment.name}</td>
              <td className="border border-gray-300 p-2">{enrollment.email}</td>
              <td className="border border-gray-300 p-2">{enrollment.phone}</td>
              <td className="border border-gray-300 p-2">
                {new Date(enrollment.enrollDate).toLocaleDateString()}
              </td>
              <td className="border border-gray-300 p-2">
                <button onClick={() => selectEnrollment(enrollment)} className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                  Edit
                </button>
                <button onClick={() => deleteEnrollment(enrollment._id)} className="bg-red-500 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedEnrollment && (
        <div className="mt-6 p-4 border border-gray-300 rounded">
          <h3 className="text-xl font-bold mb-2">Edit Enrollment</h3>
          <label className="block">Name:</label>
          <input type="text" name="name" value={updatedData.name} onChange={handleChange} className="border p-2 w-full mb-2" />

          <label className="block">Email:</label>
          <input type="email" name="email" value={updatedData.email} onChange={handleChange} className="border p-2 w-full mb-2" />

          <label className="block">Phone:</label>
          <input type="text" name="phone" value={updatedData.phone} onChange={handleChange} className="border p-2 w-full mb-2" />

          <button onClick={updateEnrollment} className="bg-green-500 text-white px-4 py-2 rounded mt-2">
            Update
          </button>
          <button onClick={() => setSelectedEnrollment(null)} className="bg-gray-500 text-white px-4 py-2 rounded ml-2">
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminEnrollments;
