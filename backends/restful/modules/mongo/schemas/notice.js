const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ColumnSchema = new Schema({
  identify: String,
  level: String,
  date: Date,
  content: String,
});

module.exports = ColumnSchema;
