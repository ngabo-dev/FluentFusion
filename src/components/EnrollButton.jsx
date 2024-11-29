import React from 'react';
import { useNavigate } from 'react-router-dom';

const EnrollButton = ({ courseId }) => {
  const navigate = useNavigate();

  const handleEnroll = () => {
    // Navigate to the course page using the courseId
    navigate(`/SingleCoursePage/${courseId}`);
  };

  return (
    <div className="mt-6">
      <button
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        onClick={handleEnroll}
      >
        Enroll Now
      </button>
    </div>
  );
};

export default EnrollButton;