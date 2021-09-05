const express = require('express');
const mongoose = require('mongoose');
const apiRouter = require('./routers/apiRouter');

// Initialize app and port
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', apiRouter);

(async () => {
  await mongoose.connect(process.env.DB_URI);
  const db = mongoose.connection;
  db.once('open', () => console.log("Connected to database"));

  // Start server
  app.listen(port, () => console.log(`Listening on port ${port}`));
})();
