import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="relative">
        {/* Outer gradient ring */}
        <div className="w-20 h-20 rounded-full border-4 border-transparent animate-spin 
          bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 
          [background-clip:padding-box,border-box]"></div>
        
        {/* Inner white circle */}
        <div className="absolute inset-2 bg-white rounded-full shadow-md"></div>

        {/* Glowing center dot */}
        <div className="absolute inset-6 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-pulse shadow-lg"></div>
      </div>
    </div>
  );
};

export default Loader;
