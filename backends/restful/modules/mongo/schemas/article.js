const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  author: String,
  title: String,
  context: String,
  date: Date,
  icons: [String]
});

ArticleSchema.getArticles = function(name, number) {
  return this.find({ name: new RegExp(name, 'i') }).limit(number);
};

module.exports = ArticleSchema;
