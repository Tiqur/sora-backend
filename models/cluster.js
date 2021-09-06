const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const clusterSchema = new Schema({
  id: ObjectId,
  seed: String,
  coordinates: {x: Number, z: Number},
  chunks: [{x: Number, z: Number}],
  repr: String,
  size: Number
});

module.exports = clusterSchema;
