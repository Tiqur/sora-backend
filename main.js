const express = require('express');
const apiRouter = require('./routers/apiRouter');

// Initialize app and port
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', apiRouter);

// Start server
app.listen(port, () => console.log(`Listening on port ${port}`));

