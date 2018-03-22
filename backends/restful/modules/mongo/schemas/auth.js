const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AuthSchema = new Schema({
  access: String,
  secret: String
});

AuthSchema.statics.getSecret = function(access) {
  return this.find({ access: access }, { _id: false, __v: false });
};

module.exports = AuthSchema;
