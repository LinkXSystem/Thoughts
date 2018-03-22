const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ColumnSchema = new Schema({
  title: String,
  date: Date,
  identify: String,
  description: string,
});

module.exports = ColumnSchema;
