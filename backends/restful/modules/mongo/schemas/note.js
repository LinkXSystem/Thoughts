const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  identify: String,
  context: String,
  date: {
    type: Date,
    default: Date.new,
  },
  icons: [String],
});

module.exports = NoteSchema;
