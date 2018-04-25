const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StorageSchema = new Schema({
  identify: String,
  server: String,
  access: String,
  secret: String,
  bucket: String,
  register: {
    type: Date,
    default: Date.now,
  },
});

module.exports = StorageSchema;
