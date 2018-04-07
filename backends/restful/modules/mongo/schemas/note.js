const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  identify: String,
  context: String,
  date: Date,
  icons: [String],
});

module.exports = NoteSchema;
