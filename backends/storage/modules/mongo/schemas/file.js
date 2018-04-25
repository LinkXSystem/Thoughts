const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FileSchema = new Schema({
  identify: String,
  type: String,
  server: String,
  url: String,
  describe: String,
  date: {
    type: Date,
    default: Date.now,
  },
  relation: String,
});

module.exports = FileSchema;
