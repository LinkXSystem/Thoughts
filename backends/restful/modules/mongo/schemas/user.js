const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  identify: String,
  portrait: String,
  username: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  fingerprint: String,
  position: String,
  description: String,
  register: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.statics.findUser = function(option) {
  return this.find({ email: email });
};

module.exports = UserSchema;
