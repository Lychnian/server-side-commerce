// Import the express router module
const router = require('express').Router();

// Import API routes from the api folder
const apiRoutes = require('./api');

//Route requests starting with /api to the API routes
router.use('/api', apiRoutes);

// Handle requests to routes not found
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

// Export the router to make it available for use in other files
module.exports = router;