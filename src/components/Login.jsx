import React, { useState } from 'react';

const Login = () => {
  const [mode, setMode] = useState(false); // false = light, true = dark

  return (
    <div className={`min-h-screen flex items-center justify-center ${mode ? "bg-black text-white" : "bg-gray-100 text-black"}`}>
      
      <div className='absolute top-4 right-4'>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
          onClick={() => setMode(true)}
        >
          Dark
        </button>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => setMode(false)}
        >
          Light
        </button>
      </div>

      <div className='w-full max-w-md bg-white p-8 rounded-lg shadow-md'>
        <div className='text-center mb-8'>
          <h1 className='text-2xl font-bold text-gray-800'>Login</h1>
        </div>

        <div className='space-y-4'>
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

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
          </div>

          <button className="w-full mt-6 bg-blue-900 hover:bg-blue-950 text-white font-medium py-2 px-4 rounded-lg transition duration-200">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
