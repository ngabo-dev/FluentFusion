module.exports = (sequelize, DataTypes) => {
    // Define the User model
    const User = sequelize.define('User', {
      user_id: { // Match the actual column name in the database
        type: DataTypes.INTEGER,
        primaryKey: true, // Define user_id as the primary key
        autoIncrement: true, // Ensure auto-increment is applied
      },
      username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    }, {
      tableName: 'users', // Explicitly define table name
      timestamps: true,    // Automatically add createdAt and updatedAt fields
      underscored: true,   // If the table uses snake_case, set this to true
    });
  
    // Return the model so it can be used in the index file
    return User;
};