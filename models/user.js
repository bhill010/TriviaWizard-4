const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

let userSchema = new mongoose.Schema({
  username: String,
  password: String,
  highscore: Number
});

userSchema.plugin(passportLocalMongoose);

let User = mongoose.model("User", userSchema);
module.exports = User;
