import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-orange-500">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">Welcome Back!</h2>
        
        <form>
          <div className="mb-4">
            <label className="block text-blue-900 font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-blue-900 font-semibold mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" /> Remember Me
            </label>
            <a href="#" className="text-orange-600 font-semibold hover:underline">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account? <a href="#" className="text-blue-900 font-bold hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
