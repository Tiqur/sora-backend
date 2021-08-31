const mongoose = require('mongoose');
const ObjectId = Schema.ObjectId;
const Schema = mongoose.Schema;

const clusterSchema = new Schema({
  id: ObjectId,
  seed: String,
  chunks: [[Number]]
});

module.exports = clusterSchema;
