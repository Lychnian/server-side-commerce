// Require the necessary packages and files
const express = require('express'); // Import Express.js framework
const routes = require('./routes'); // Import routes from the routes directory
const sequelize = require('./config/connection'); // Import Sequelize database connection

// Create an instance of the Express application
const app = express();

// Define the port to listen on, using environment variable PORT or defaulting to 3001
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON bodies and URL-encoded bodies
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Use the routes defined in the routes directory
app.use(routes);

// Sync Sequelize models to the database and start the Express server
sequelize.sync({ force: false }).then(() => {
  // Once the database is synced, start the Express server
  app.listen(PORT, () => {
    // Callback function executed when the server starts listening
    console.log(`App listening at http://localhost:${PORT}`); // Log a message indicating the server is running
  });
});
