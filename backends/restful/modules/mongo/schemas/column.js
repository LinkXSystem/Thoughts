const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ColumnSchema = new Schema({
  identify: String,
  title: String,
  date: Date,
  description: String,
});

module.exports = ColumnSchema;
