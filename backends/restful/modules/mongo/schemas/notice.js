const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NoticeSchema = new Schema({
  identify: String,
  level: String,
  date: {
    type: Date,
    default: Date.new,
  },
  content: String,
});

module.exports = NoticeSchema;
