import React from 'react';

const LessonList = () => {
  const lessons = [
    { title: "Lesson 1: Greetings and Introductions", status: "start" },
    { title: "Lesson 2: Basic Vocabulary", status: "locked" },
    { title: "Lesson 3: Common Phrases", status: "locked" }
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Course Lessons</h2>
      <ul className="space-y-4">
        {lessons.map((lesson, index) => (
          <li key={index} className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-800 font-medium">{lesson.title}</span>
            <button
              className={`py-1 px-4 rounded ${lesson.status === 'start' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-400 text-white cursor-not-allowed'}`}
              disabled={lesson.status !== 'start'}
            >
              {lesson.status === 'start' ? 'Start Lesson' : 'Locked'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LessonList;