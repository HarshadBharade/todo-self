import React from "react";

const Signup = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Sign Up</h1>
    
        </div>

        {/* Form Section */}
        <div className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Name
            </label>
            <input 
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>

          {/* Email/Phone Field */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Email or Phone number
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email or Phone number"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block  text-gray-700 text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
          </div>

          {/* Sign Up Button */}
          <button className="w-full mt-6 bg-blue-900 hover:bg-blue-950 text-white font-medium py-2 px-4 rounded-lg transition duration-200 cursor-pointer">
            Sign Up
          </button>
        </div>

        {/* Footer Links */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-600">
            By signing up, you agree to our{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Privacy Policy
            </a>
          </p>
          <p className="mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <a href={"/Login"} className="text-blue-500 font-medium hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;