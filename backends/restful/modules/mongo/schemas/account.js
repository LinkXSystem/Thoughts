const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  identify: String,
});

module.exports = AccountSchema;
