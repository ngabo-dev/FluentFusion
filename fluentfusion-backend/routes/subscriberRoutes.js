const express = require('express');
const db = require('../models');  // Assuming db is set up with Sequelize models
const router = express.Router();

// POST route to subscribe a new email
router.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    console.log(db.Subscriber);
    // Check if the email is already subscribed
    const existingSubscriber = await db.Subscriber.findOne({ where: { email } });
    if (existingSubscriber) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }

    // Create the new subscriber in the database
    const newSubscriber = await db.Subscriber.create({ email });

    res.status(201).json({ message: 'Email subscribed successfully', subscriber: newSubscriber });
  } catch (error) {
    console.error('Error subscribing email:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// GET route to fetch all subscribers
router.get('/subscribers', async (req, res) => {
  try {
    const subscribers = await db.Subscriber.findAll();  // Fetch all subscribers from the database
    if (subscribers.length === 0) {
      return res.status(404).json({ message: 'No subscribers found' });
    }
    res.status(200).json({ message: 'Subscribers retrieved successfully', subscribers });
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    res.status(500).json({ message: 'Error fetching subscribers', error });
  }
});

module.exports = router;