const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ColumnSchema = new Schema({
  identify: String,
  title: String,
  date: {
    type: Date,
    default: Date.new,
  },
  description: String,
});

module.exports = ColumnSchema;
