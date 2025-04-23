import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
import { FaTimes } from "react-icons/fa";

const Signup = ({ setShowSignup }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // ✅ New state for phone number
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("https://lms-backend-f9h3.onrender.com/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          email,
          phone, // ✅ Include phone in the request
          password,
          role,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      localStorage.setItem("authToken", data.token);
      alert("Signup successful!");
      navigate("/dashboard");
      setShowSignup(false);
    } catch (err) {
      setError(err.message || "Network error. Please try again.");
    }
  };

  return (
    <>
      {showLogin ? (
        <Login setShowLogin={setShowLogin} />
      ) : (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full relative">
            {/* Close Button */}
            <button
              onClick={() => setShowSignup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FaTimes size={20} />
            </button>

            <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">Create an Account</h2>
            {error && <p className="text-red-500 text-center">{error}</p>}

            <form onSubmit={handleSignup}>
              <div className="mb-4">
                <label className="block text-blue-900 font-semibold mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-blue-900 font-semibold mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-blue-900 font-semibold mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-blue-900 font-semibold mb-1">Password</label>
                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-blue-900 font-semibold mb-1">Select Role</label>
                <select
                  className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="student">Student</option>
                 
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition"
              >
                Sign Up
              </button>
            </form>

            <p className="text-center text-gray-600 mt-4">
              Already have an account?{" "}
              <button
                onClick={() => {
                  setShowLogin(true);
                }}
                className="text-blue-900 font-bold hover:underline"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
