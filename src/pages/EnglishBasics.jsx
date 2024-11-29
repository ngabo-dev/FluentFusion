import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EnglishBasics = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
  });

  const questions = [
    {
      question: 'What is an apple?',
      options: ['A fruit', 'A vehicle', 'A book'],
      correct: 'A fruit'
    },
    {
      question: 'How do you say "Good Morning" in English?',
      options: ['Good Morning', 'Good Afternoon', 'Good Evening'],
      correct: 'Good Morning'
    },
    {
      question: 'What number does "Three" represent?',
      options: ['2', '3', '4'],
      correct: '3'
    }
  ];

  const handleAnswerChange = (e, q) => {
    setAnswers({ ...answers, [q]: e.target.value });
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((q, index) => {
      if (answers[`q${index + 1}`] === q.correct) {
        newScore += 1;
      }
    });
    setScore(newScore);
    setShowResults(true);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <button className="text-blue-500 flex items-center mb-4" onClick={() => navigate('/CoursesDashboard')}>
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        Go Back to All Courses
      </button>
      <h1 className="text-3xl font-bold mb-4">English Basics</h1>
      <p className="text-lg mb-8">Master essential English skills with beginner-friendly lessons designed for success.</p>

      {page < 4 && !showResults && (
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${(page / 4) * 100}%` }}></div>
        </div>
      )}

      {page === 1 && !showResults && (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Page 1: Basic Vocabulary</h2>
          <ul className="list-disc list-inside mb-6">
            <li><strong>Apple</strong> - A fruit that is usually red, green, or yellow and is sweet or tart in taste.</li>
            <li><strong>Book</strong> - A set of written, printed, or blank pages bound together, often used for reading.</li>
            <li><strong>Car</strong> - A vehicle with four wheels, typically powered by an internal combustion engine or electric motor.</li>
            <li><strong>Dog</strong> - A domesticated carnivorous mammal that typically has a long snout and an acute sense of smell.</li>
            <li><strong>House</strong> - A building for human habitation, especially one that is lived in by a family or small group of people.</li>
          </ul>
          <button className="bg-blue-500 text-white px-4 py-2 rounded shadow-lg" onClick={() => setPage(2)}>Next: Basic Greetings</button>
        </div>
      )}

      {page === 2 && !showResults && (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Page 2: Basic Greetings</h2>
          <ul className="list-disc list-inside mb-6">
            <li><strong>Hello</strong> - A greeting used when meeting someone.</li>
            <li><strong>Good Morning</strong> - A greeting used in the morning.</li>
            <li><strong>Good Afternoon</strong> - A greeting used in the afternoon.</li>
            <li><strong>Good Evening</strong> - A greeting used in the evening.</li>
            <li><strong>Good Night</strong> - A phrase used when parting or going to bed.</li>
            <li><strong>How are you?</strong> - A question asking about someone's well-being.</li>
            <li><strong>I am fine</strong> - A response indicating that you are well.</li>
          </ul>
          <button className="bg-blue-500 text-white px-4 py-2 rounded shadow-lg mr-2" onClick={() => setPage(1)}>Previous: Basic Vocabulary</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded shadow-lg" onClick={() => setPage(3)}>Next: Numbers</button>
        </div>
      )}

      {page === 3 && !showResults && (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Page 3: Numbers</h2>
          <ul className="list-disc list-inside mb-6">
            <li><strong>One</strong> - 1</li>
            <li><strong>Two</strong> - 2</li>
            <li><strong>Three</strong> - 3</li>
            <li><strong>Four</strong> - 4</li>
            <li><strong>Five</strong> - 5</li>
            <li><strong>Six</strong> - 6</li>
            <li><strong>Seven</strong> - 7</li>
            <li><strong>Eight</strong> - 8</li>
            <li><strong>Nine</strong> - 9</li>
            <li><strong>Ten</strong> - 10</li>
          </ul>
          <button className="bg-blue-500 text-white px-4 py-2 rounded shadow-lg mr-2" onClick={() => setPage(2)}>Previous: Basic Greetings</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded shadow-lg" onClick={() => setPage(4)}>Start Quiz</button>
        </div>
      )}

{page === 4 && !showResults && (
  <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
    <h2 className="text-2xl font-semibold mb-4">English Quiz</h2>
    {questions.map((q, index) => (
      <div key={index} className="mb-4">
        <p className="mb-2">{q.question}</p>
        {q.options.map((option, i) => (
          <div key={i} className="flex items-center mb-1">
            <input
              type="radio"
              id={`q${index + 1}_${i}`}
              name={`q${index + 1}`}
              value={option}
              onChange={(e) => handleAnswerChange(e, `q${index + 1}`)}
              className="mr-2"
            />
            <label htmlFor={`q${index + 1}_${i}`}>{option}</label>
          </div>
        ))}
      </div>
    ))}
    <button className="bg-blue-500 text-white px-4 py-2 rounded shadow-lg" onClick={handleSubmit}>Submit Quiz</button>
  </div>
)}

{showResults && (
  <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
    <h2 className="text-2xl font-semibold mb-4">Quiz Results</h2>
    <p>You scored {score} out of {questions.length}!</p>
    <button className="bg-blue-500 text-white px-4 py-2 rounded shadow-lg" onClick={() => { setPage(1); setShowResults(false); setScore(0); setAnswers({ q1: '', q2: '', q3: '' }); }}>Restart Course</button>
  </div>
)}
</div>
  );
};

export default EnglishBasics;