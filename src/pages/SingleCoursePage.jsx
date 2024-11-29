import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleCoursePage = () => {
  const { id } = useParams(); // Get course ID from URL
  const [course, setCourse] = useState({});
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    // Fetch course content
    axios.get(`http://localhost:3000/api/courses/${id}`)
      .then(response => {
        setCourse(response.data);
      })
      .catch(error => console.error('Error fetching course:', error));

    // Fetch quizzes for the course
    axios.get(`http://localhost:3000/api/courses/${id}/quizzes`)
      .then(response => {
        setQuizzes(response.data);
      })
      .catch(error => console.error('Error fetching quizzes:', error));
  }, [id]);

  return (
    <div className="course-container">
      <h2>{course.title}</h2>
      <div className="course-content">
        <p>{course.content}</p>
      </div>
      
      {/* Quiz Section */}
      <div className="quiz-section">
        <h3>Quiz</h3>
        <form>
          {quizzes.map((quiz, index) => (
            <div key={quiz.id} className="quiz-question">
              <p>{quiz.question}</p>
              <input type="radio" name={`question-${quiz.id}`} value="A" /> {quiz.option_a} <br />
              <input type="radio" name={`question-${quiz.id}`} value="B" /> {quiz.option_b} <br />
              <input type="radio" name={`question-${quiz.id}`} value="C" /> {quiz.option_c} <br />
              <input type="radio" name={`question-${quiz.id}`} value="D" /> {quiz.option_d} <br />
            </div>
          ))}
          <button type="submit">Submit Quiz</button>
        </form>
      </div>
      
      {/* Certificate Button */}
      <div className="certificate-section">
        <button className="btn-certificate">Get Certificate</button>
      </div>
    </div>
  );
};

export default SingleCoursePage;