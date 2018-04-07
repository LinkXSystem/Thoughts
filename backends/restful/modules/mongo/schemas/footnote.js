const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FootnoteSchema = new Schema({
  identify: String,
  date: Date,
  content: String,
});

FootnoteSchema.statics.getFootnote = function(data, range) {
  return this.find({
    time: {
      $gte: new Date(data),
      $lt: new Date(range),
    },
  });
};

module.exports = FootnoteSchema;
