import { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaSave, FaPlus } from "react-icons/fa";

const AdminFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingFeedback, setEditingFeedback] = useState(null);
  const [newFeedback, setNewFeedback] = useState({
    author_name: "",
    text: "",
    rating: 5
  });

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  // Fetch all feedbacks from backend
  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get("https://lms-backend-f9h3.onrender.com/api/feedback");
      setFeedbacks(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    }
  };

  // Delete feedback
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      try {
        await axios.delete(`https://lms-backend-f9h3.onrender.com/api/feedback/${id}`);
        setFeedbacks(feedbacks.filter((feedback) => feedback._id !== id));
      } catch (error) {
        console.error("Error deleting feedback:", error);
      }
    }
  };

  // Handle input changes for new feedback
  const handleInputChange = (e) => {
    setNewFeedback({ ...newFeedback, [e.target.name]: e.target.value });
  };

  // Handle input changes for editing feedback
  const handleEditChange = (e) => {
    setEditingFeedback({ ...editingFeedback, [e.target.name]: e.target.value });
  };

  // Add new feedback
  const handleAddFeedback = async () => {
    try {
      const response = await axios.post("https://lms-backend-f9h3.onrender.com/api/feedback", newFeedback);
      setFeedbacks([...feedbacks, response.data]);
      setNewFeedback({ author_name: "", text: "", rating: 5 });
    } catch (error) {
      console.error("Error adding feedback:", error);
    }
  };

  // Edit feedback
  const handleEditFeedback = (feedback) => {
    setEditingFeedback(feedback);
  };

  // Save edited feedback
  const handleSaveEdit = async () => {
    try {
      await axios.put(`https://lms-backend-f9h3.onrender.com/api/feedback/${editingFeedback._id}`, editingFeedback);
      setFeedbacks(feedbacks.map((fb) => (fb._id === editingFeedback._id ? editingFeedback : fb)));
      setEditingFeedback(null);
    } catch (error) {
      console.error("Error updating feedback:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen text-black">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Admin - Feedback Management</h2>

      {/* Add Feedback Form */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-semibold mb-2">Add New Feedback</h3>
        <input
          type="text"
          name="author_name"
          placeholder="Author Name"
          value={newFeedback.author_name}
          onChange={handleInputChange}
          className="w-full p-2 border rounded mb-2"
        />
        <textarea
          name="text"
          placeholder="Feedback"
          value={newFeedback.text}
          onChange={handleInputChange}
          className="w-full p-2 border rounded mb-2"
        ></textarea>
        <input
          type="number"
          name="rating"
          placeholder="Rating (1-5)"
          value={newFeedback.rating}
          onChange={handleInputChange}
          className="w-full p-2 border rounded mb-2"
        />
        <button onClick={handleAddFeedback} className="bg-green-500 text-white px-4 py-2 rounded">
          <FaPlus className="inline-block mr-2" /> Add Feedback
        </button>
      </div>

      {loading ? (
        <p>Loading feedbacks...</p>
      ) : (
        <div className="bg-white p-4 rounded-lg shadow-md test-black">
          <h3 className="text-lg font-semibold mb-4">All Feedbacks</h3>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Author</th>
                <th className="border p-2">Feedback</th>
                <th className="border p-2">Rating</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((feedback) => (
                <tr key={feedback._id} className="border">
                  <td className="border p-2">{feedback.author_name}</td>
                  <td className="border p-2">{feedback.text}</td>
                  <td className="border p-2">{feedback.rating}</td>
                  <td className="border p-2">
                    <button onClick={() => handleEditFeedback(feedback)} className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDelete(feedback._id)} className="bg-red-500 text-white px-3 py-1 rounded">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Edit Feedback Form */}
      {editingFeedback && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Edit Feedback</h3>
            <input
              type="text"
              name="author_name"
              value={editingFeedback.author_name}
              onChange={handleEditChange}
              className="w-full p-2 border rounded mb-2"
            />
            <textarea
              name="text"
              value={editingFeedback.text}
              onChange={handleEditChange}
              className="w-full p-2 border rounded mb-2"
            ></textarea>
            <input
              type="number"
              name="rating"
              value={editingFeedback.rating}
              onChange={handleEditChange}
              className="w-full p-2 border rounded mb-2"
            />
            <div className="flex justify-between">
              <button onClick={handleSaveEdit} className="bg-blue-500 text-white px-4 py-2 rounded">
                <FaSave className="inline-block mr-2" /> Save
              </button>
              <button onClick={() => setEditingFeedback(null)} className="bg-gray-500 text-white px-4 py-2 rounded">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminFeedback;
