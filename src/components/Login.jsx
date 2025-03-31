import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  console.log(email, password)
  const handleLogin = async (e) => {
    
    e.preventDefault();
    setError(""); 
  
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json(); // Convert response to JSON
  
      if (!response.ok) {
        throw new Error(data.message || "Login failed"); // Throw error for bad responses
      }
  
      localStorage.setItem("authToken", data.token); // ✅ Store Token
      alert("Login successful!");
      navigate("/dashboard"); // ✅ Redirect after login
    } catch (err) {
      setError(err.message || "Network error. Please try again."); // Show error
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-orange-500">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">Welcome Back!</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <div>
          <div className="mb-4">
            <label className="block text-blue-900 font-semibold mb-1">Email or Phone</label>
            <input
              type="text"
              placeholder="Enter your email or phone"
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-blue-900 font-semibold mb-1">Password</label>
            <input
  type="password"
  placeholder="Enter your password"
  className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  autoComplete="current-password" // ✅ Added this line
/>

          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition"
           
          >
            Login
          </button>
        </div>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-900 font-bold hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
