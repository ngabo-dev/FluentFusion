const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../models');
const router = express.Router();
const jwt = require('jsonwebtoken');

// POST route to register a new user
  router.post('/register', async (req, res) => {
    try {
      const { username, email, password } = req.body;

      console.log(db.User);
      // Validate if the email already exists
      const existingUser = await db.User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already in use' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create the new user in the database
      const user = await db.User.create({
        username,
        email,
        password: hashedPassword,
      });

      res.status(201).json({ status: 'success', message: 'User registered successfully', user });
    } catch (error) {
      console.error('Error during registration:', error);
      res.status(500).json({ status: 'error', message: 'An error occurred during registration' });
    }
  });


// POST route to log in an existing user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists in the database
    const user = await db.User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ status: 'error', message: 'Invalid email or password' });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ status: 'error', message: 'Invalid email or password' });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET || 'your_secret_key',
      { expiresIn: '1h' }
    );

    // Send the token to the client
    res.status(200).json({ status: 'success', message: 'Login successful', token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ status: 'error', message: 'An error occurred during login' });
  }
});



// GET route to fetch all users
router.get('/users', async (req, res) => {
  try {
    const users = await db.User.findAll(); // Fetch all users from the database
    if (users.length === 0) {
      return res.status(404).json({ message: 'No users found' });
    }
    res.status(200).json({ status: 'success', users }); // Return users in a standardized response
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ status: 'error', message: 'Error fetching users', error });
  }
});

module.exports = router;