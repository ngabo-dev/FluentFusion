require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./models');
const authRoutes = require('./routes/authRoutes');
const subscriberRoutes = require('./routes/subscriberRoutes');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(express.json());

// Debug incoming requests at the /sub level
app.use('/sub', (req, res, next) => {
  console.log('Request received at /sub route');
  next();
});

// Debug specific requests for /sub/subscribe
app.use('/sub/subscribe', (req, res, next) => {
  console.log('Request received at POST /sub/subscribe:', req.body);
  next();
});

// Error handling middleware for JSON parsing errors
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ error: 'Invalid JSON format' });
  }
  next();
});

// Registering the routes
console.log('Registering auth routes...');
app.use('/auth', authRoutes);

console.log('Registering subscriber routes...');
app.use('/sub', subscriberRoutes);


const courses = [
  {
    id: 1,
    name: 'Kinyarwanda for Beginners',
    description: 'Learn basic Kinyarwanda vocabulary, greetings, and everyday phrases.',
    content: 'This is a detailed course on Kinyarwanda basics. You will learn common phrases, vocabulary, pronunciation, and more.',
    lessons: [
      { title: 'Lesson 1: Greetings', content: 'Learn basic greetings.' },
      { title: 'Lesson 2: Numbers', content: 'Learn to count.' },
    ],
  },
  {
    id: 2,
    name: 'English Basics',
    description: 'Build a solid foundation in English for effective communication.',
    content: 'This course covers English grammar, vocabulary, and practical usage.',
    lessons: [{ title: 'Lesson 1: Nouns and Verbs', content: 'Understanding English grammar.' }],
  },
];

app.get('/api/courses', (req, res) => {
  res.json(courses);
});

// Fetch all courses
app.get('/api/courses', async (req, res) => {
  try {
    const courses = await query('SELECT * FROM courses');
    res.json(courses);  // Send the course data as JSON
  } catch (err) {
    res.status(500).json({ message: 'Error fetching courses', error: err });
  }
});

// Fetch a single course by ID
app.get('/api/courses/:id', async (req, res) => {
  const courseId = req.params.id;
  try {
    const course = await query('SELECT * FROM courses WHERE id = ?', [courseId]);
    if (course.length === 0) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course[0]);  // Send the single course data
  } catch (err) {
    res.status(500).json({ message: 'Error fetching course', error: err });
  }
});


app.post('/api/quiz/submit', (req, res) => {
  const { answers, studentId, courseId } = req.body;

  // Logic to check answers and generate score
  const score = checkAnswers(answers);

  if (score >= passingGrade) {
    // Generate certificate or send a message
    const certificate = generateCertificate(studentId, courseId);
    res.json({ success: true, certificate });
  } else {
    res.json({ success: false, message: 'You did not pass the quiz.' });
  }
});

// Get quizzes for a specific course
app.get('/api/courses/:id/quizzes', (req, res) => {
  const courseId = req.params.id;
  db.query('SELECT * FROM quizzes WHERE course_id = ?', [courseId], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Database Sync and Server Start
db.sequelize
  .sync()
  .then(() => {
    console.log('Database connected successfully');
    app.listen(3000, () => {
      console.log('Server is running on http://localhost:3000');
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });