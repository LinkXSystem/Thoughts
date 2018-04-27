const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DraftSchema = new Schema({
  identify: String,
  column: String,
  title: String,
  context: String,
  date: {
    type: Date,
    default: Date.new,
  },
  icons: [String],
});

module.exports = DraftSchema;
