const express = require('express');
const mongoose = require('mongoose');
const clusterSchema = require('../models/cluster');
const router = express.Router();

const Cluster = mongoose.model('Cluster', clusterSchema);
const connected_users = {}

router.post('/', async (req, res) => {
  if (req.body) {
      const b = req.body;
      const [seed, chunks, coords, size] = [b.seed, b.chunks, b.coords, b.size]
      
      // Basic validation
      if (seed && chunks && coords && size) {
        console.log(seed, chunks, coords, size);
        const cluster = new Cluster({seed, coords, chunks, size});
        cluster.save();
      }
  }
  res.sendStatus(200);
});

router.get('/', async (req, res) => {
  const username = req.body.user;
  if (username) {
    const current_time = Date.now();

    // Remove ip if no ping for x amount of time
    for (const k in connected_users) {
        const last_ping = connected_users[k];
        const time_since_last_ping = current_time - last_ping;

      // If time between greater than 5 seconds
      if (time_since_last_ping >= 5000) {
          delete connected_users[k];
      }
    }

    connected_users[username] = Date.now();

    console.log(connected_users)
    res.send(Object.keys(connected_users));
  }
})


module.exports = router;
