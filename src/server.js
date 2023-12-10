// Import the Express framework
const express = require('express');

// Create a new Express application
const app = express();

// Define a route that handles HTTP GET requests to the root URL ('/')
app.get('/', (req, res) => {
  // Render the "Hello, World!" message to the browser
  res.send('Hello, World!!');
});

// Start the server and listen for incoming HTTP requests
const server = app.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});

// Export the app and server for testing purposes
module.exports = {
  app,
  server,
};