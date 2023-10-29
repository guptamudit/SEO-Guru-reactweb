const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: String,
  email: { type: String, unique: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
