const express = require('express');
const mongoose = require('mongoose');
const clusterSchema = require('../models/cluster');
const router = express.Router();

const Cluster = mongoose.model('Cluster', clusterSchema);

router.post('/', async (req, res) => {
  if (req.body) {
      const b = req.body;
      const [seed, chunks, coords, repr, size] = [b.seed, b.chunks, b.coords, b.repr, b.size]
      
      // Basic validation
      if (seed && chunks && coords && repr && size) {
        console.log(seed, chunks, coords, repr, size);
        const cluster = new Cluster({seed, coords, chunks, repr, size});
        cluster.save();
      }
  }
  res.sendStatus(200);
});

module.exports = router;
