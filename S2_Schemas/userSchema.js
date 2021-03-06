const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    default: false,
  },
  name: {
    type: String,
    required: true,
  },
});

var User = mongoose.model("User", userSchema);

module.exports = User;
