import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const KinyarwandaCourse = () => {
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
      question: 'How do you say "Hello" in Kinyarwanda?',
      options: ['Muraho', 'Mwaramutse', 'Mwiriwe'],
      correct: 'Muraho'
    },
    {
      question: 'How do you say "Thank you" in Kinyarwanda?',
      options: ['Mbabarira', 'Murakoze', 'Nyabuneka'],
      correct: 'Murakoze'
    },
    {
      question: 'What is the Kinyarwanda word for "Two"?',
      options: ['Rimwe', 'Kabiri', 'Gatatu'],
      correct: 'Kabiri'
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
      <h1 className="text-3xl font-bold mb-4">Kinyarwanda For Beginners</h1>
      <p className="text-lg mb-8">Learn the basics of Kinyarwanda with simple and beginner-friendly lessons.</p>

      {page < 4 && !showResults && (
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${(page / 4) * 100}%` }}></div>
        </div>
      )}

      {page === 1 && !showResults && (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Page 1: Greetings</h2>
          <ul className="list-disc list-inside mb-6">
            <li><strong>Hello</strong> - Muraho</li>
            <li><strong>Good Morning</strong> - Mwaramutse</li>
            <li><strong>Good Afternoon</strong> - Mwiriwe</li>
            <li><strong>Good Evening</strong> - Mwiriwe</li>
            <li><strong>Good Night</strong> - Ijoro ryiza</li>
            <li><strong>How are you?</strong> - Amakuru?</li>
            <li><strong>I am fine</strong> - Ni meza</li>
          </ul>
          <button className="bg-blue-500 text-white px-4 py-2 rounded shadow-lg" onClick={() => setPage(2)}>Next: Common Phrases</button>
        </div>
      )}

      {page === 2 && !showResults && (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Page 2: Common Phrases</h2>
          <ul className="list-disc list-inside mb-6">
            <li><strong>Thank you</strong> - Murakoze</li>
            <li><strong>Please</strong> - Nyabuneka</li>
            <li><strong>Yes</strong> - Yego</li>
            <li><strong>No</strong> - Oya</li>
            <li><strong>Excuse me</strong> - Mbabarira</li>
            <li><strong>Sorry</strong> - Mbabarira</li>
          </ul>
          <button className="bg-blue-500 text-white px-4 py-2 rounded shadow-lg mr-2" onClick={() => setPage(1)}>Previous: Greetings</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded shadow-lg" onClick={() => setPage(3)}>Next: Numbers</button>
        </div>
      )}

      {page === 3 && !showResults && (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Page 3: Numbers</h2>
          <ul className="list-disc list-inside mb-6">
            <li><strong>One</strong> - Rimwe</li>
            <li><strong>Two</strong> - Kabiri</li>
            <li><strong>Three</strong> - Gatatu</li>
            <li><strong>Four</strong> - Kane</li>
            <li><strong>Five</strong> - Gatanu</li>
            <li><strong>Six</strong> - Gatandatu</li>
            <li><strong>Seven</strong> - Karindwi</li>
            <li><strong>Eight</strong> - Umunani</li>
            <li><strong>Nine</strong> - Icyenda</li>
            <li><strong>Ten</strong> - Icumi</li>
          </ul>
          <button className="bg-blue-500 text-white px-4 py-2 rounded shadow-lg mr-2" onClick={() => setPage(2)}>Previous: Common Phrases</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded shadow-lg" onClick={() => setPage(4)}>Start Quiz</button>
        </div>
      )}

      {page === 4 && !showResults && (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Kinyarwanda Quiz</h2>
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

export default KinyarwandaCourse;