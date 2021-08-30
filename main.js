const express = require('express');

// Initialize app and port
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Start server
app.listen(port, () => console.log(`Listening on port ${port}`));

