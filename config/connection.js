// Import the dotenv module to load environment variables from a .env file
require('dotenv').config();

// Import the Sequelize module to create a database connection
const Sequelize = require('sequelize');

// Create a new Sequelize instance
const sequelize = process.env.JAWSDB_URL
  // Check if the JAWSDB_URL environment variable is set (for Heroku deployment)
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    // Otherwise, use local database connection 
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

// Export the Sequelize instance to make it available for use in other files    
module.exports = sequelize;
