const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  identify: String,
  title: String,
  content: String,
  date: {
    type: Date,
    default: Date.new,
  },
  icons: [String],
});

module.exports = NoteSchema;
