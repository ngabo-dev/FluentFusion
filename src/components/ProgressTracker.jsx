import React from 'react';

const ProgressTracker = () => {
  const progress = 33; // Example of 33% progress
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Progress</h2>
      <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
        <div className="bg-blue-600 h-4 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="text-sm text-gray-600">You have completed {progress / 33} of 3 lessons.</p>
    </div>
  );
};

export default ProgressTracker;