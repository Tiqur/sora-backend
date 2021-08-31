const express = require('express');
const mongoose = require('mongoose');
const clusterSchema = require('../models/cluster');
const router = express.Router();

const Cluster = mongoose.model('Cluster', clusterSchema);

router.post('/', async (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
