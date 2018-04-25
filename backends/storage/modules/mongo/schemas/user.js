const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  identify: String,
  username: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  register: {
    type: Date,
    default: Date.now,
  },
  fingerprint: String,
});

UserSchema.statics.findUser = function(option) {
  return this.find({ email: email });
};

module.exports = UserSchema;
