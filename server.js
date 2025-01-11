const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // You can change this to any port

// Serve static files like CSS, images, etc.
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});