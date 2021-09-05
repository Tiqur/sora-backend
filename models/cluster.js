const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const clusterSchema = new Schema({
  id: ObjectId,
  seed: String,
  chunks: [[Number]]
});

module.exports = clusterSchema;
