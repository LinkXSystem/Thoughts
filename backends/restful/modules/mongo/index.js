const mongoose = require('./connect');

const article = require('./schemas/article');
const column = require('./schemas/column');
const footnote = require('./schemas/footnote');
const notice = require('./schemas/notice');
const user = require('./schemas/user');

const Article = mongoose.model('article', article);
const Column = mongoose.model('column', column);
const Footnote = mongoose.model('footnote', footnote);
const notice = mongoose.model('notice', notice);
const User = mongoose.model('user', user);

module.exports = {
  Article,
  Column,
  Footnote,
  Notice,
  User,
};
