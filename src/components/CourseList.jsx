// src/components/CourseList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/courses')
      .then((response) => setCourses(response.data))
      .catch((error) => console.error('Error fetching courses:', error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {courses.map((course) => (
        <div key={course.id} className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold">{course.name}</h3>
          <p className="text-sm text-gray-600">{course.description}</p>
          <Link
            to={`/single-course/${course.id}`}
            className="text-blue-600 mt-4 inline-block hover:underline"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CourseList;