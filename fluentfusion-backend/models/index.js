const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config(); // Load environment variables

// Check environment variables
if (!process.env.DB_NAME || !process.env.DB_USER || !process.env.DB_PASS) {
  throw new Error('Missing required environment variables for database connection.');
}

// Initialize Sequelize connection
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_DIALECT || 'mysql',
    logging: false, // Disable logging in production
  }
);

// Import models
const User = require('./User')(sequelize, DataTypes);
const Subscriber = require('./Subscriber')(sequelize, DataTypes); // Example for adding Subscriber

// Define model associations
User.hasMany(Subscriber, { foreignKey: 'user_id' }); // Example association
Subscriber.belongsTo(User, { foreignKey: 'user_id' });

// Export the sequelize instance and models
module.exports = {
  sequelize,
  Sequelize, // Export Sequelize constructor for migrations/seeders
  User,
  Subscriber, // Add Subscriber to the exported models
};

module.exports = { sequelize, Subscriber, User };