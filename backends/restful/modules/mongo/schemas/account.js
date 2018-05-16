const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  identify: String,
  type: String,
  token: String,
  name: String,
  data: String,
  date: {
    type: Date,
    default: Date.new,
  },
});

module.exports = AccountSchema;
