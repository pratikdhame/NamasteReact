import React from 'react';// Import Tailwind CSS here if not using a global import

const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {Array(6).fill(null).map((_, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-100 opacity-70 animate-shimmer"></div>
          <div className="relative z-10">
            <div className="bg-gray-200 h-40 w-full rounded-lg"></div>
            <div className="mt-4">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4 mt-2"></div>
            </div>
            <div className="mt-4">
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-10 bg-gray-200 rounded w-12"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shimmer;
