const mongoose = require('./connect');

const article = require('./schemas/article');
const column = require('./schemas/column');
const footnote = require('./schemas/footnote');
const notice = require('./schemas/notice');
const user = require('./schemas/user');
const note = require('./schemas/note');
const draft = require('./schemas/draft');
const account = require('./schemas/account');

const Article = mongoose.model('article', article);
const Column = mongoose.model('column', column);
const Footnote = mongoose.model('footnote', footnote);
const Notice = mongoose.model('notice', notice);
const Note = mongoose.model('note', note);
const User = mongoose.model('user', user);
const Draft = mongoose.model('draft', draft);
const Account = mongoose.model('account', account);

module.exports = {
  control: mongoose,
  entity: {
    Article,
    Column,
    Footnote,
    Notice,
    Note,
    User,
    Draft,
    Account,
  },
};
