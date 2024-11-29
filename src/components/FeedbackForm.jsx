import React from 'react';

const FeedbackForm = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Feedback</h2>
      <textarea
        className="w-full border rounded-lg p-2 text-sm text-gray-600"
        rows="4"
        placeholder="Share your thoughts about this course..."
      ></textarea>
      <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
        Submit Feedback
      </button>
    </div>
  );
};

export default FeedbackForm;