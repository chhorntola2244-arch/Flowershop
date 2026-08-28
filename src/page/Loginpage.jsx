import React, { useState } from "react";

function Login() {

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-500 mt-2">Login to your account</p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* Email */}
          <div>
            <label className=" text-gray-700 font-semibold mb-2">Email</label>
            <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
          </div>
          {/* Password */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <input type="password" placeholder="Enter your password" className="w-full px-4 py-3 border border-gray-300 rounded-lg " />
          </div>
          {/* Login Button */}
          <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-lg">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;