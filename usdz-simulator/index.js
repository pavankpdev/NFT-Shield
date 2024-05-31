const express = require('express');
const path = require('path');
const cors = require('cors')

const app = express();
const PORT = 3001;
app.use(cors())
// Middleware to remove the X-Frame-Options header
app.use((req, res, next) => {
    res.removeHeader('X-Frame-Options');
    next();
});

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname)));

// Route for the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
