// 1. Import the Express module
const express = require('express');

// 2. Create an Express application instance
const app = express();

// 3. Define the port the server will listen on
const PORT = 3000;

/*
* 4. Middleware: Serve Static Files
*
* The 'express.static' middleware tells Express to look for static
* assets (HTML, CSS, JS, images, etc.) in the 'public' directory.
*
* Files in 'public' are now accessible directly from the root path ('/').
* For example, 'public/index.html' is accessed via 'http://localhost:3000/index.html'
* (or just 'http://localhost:3000/' because Express automatically looks for index.html).
*/
app.use(express.static('public'));

// 5. Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(`Access the app here: http://localhost:${PORT}`);
});