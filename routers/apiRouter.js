const express = require('express');
const mongoose = require('mongoose');
const clusterSchema = require('../models/cluster');
const router = express.Router();

const Cluster = mongoose.model('Cluster', clusterSchema);

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

module.exports = router;
