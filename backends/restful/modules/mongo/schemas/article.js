const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  identify: String,
  column: String,
  title: String,
  content: String,
  date: Date,
  icons: [String],
});

ArticleSchema.statics.getArticles = function(name, number) {
  return this.find({ name: new RegExp(name, 'i') }).limit(number);
};

module.exports = ArticleSchema;
