// Import the express node module.
import express from 'express';

// Create an Express application. The express() function is a top-level function exported by the express module.
const app = express();

// Set a port for the server to listen on.
const port = 3000;

// Express "root" route.
app.get('/', function (req, res) {
  // res.send('Hello World!'); // Original response code that sends plain text to the browser.

  res.json({ message: 'Hello World' }); // Updated response code that sends JSON back to the browser.
});

// Start and express server listening on the predefined port that was set above.
app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});
