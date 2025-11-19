const express = require('express');
const path = require('path'); // We need this module to get the file path
const app = express();
const PORT = process.env.PORT || 8080;

// This is the main route
app.get('/', (req, res) => {
    // This sends the index.html file
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
