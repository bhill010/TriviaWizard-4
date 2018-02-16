const mongoose = require("mongoose");

let highscoreSchema = new mongoose.Schema({
  score: Number,
  owner: {
    id: {
      type: Number,
      ref: "HighScore"
    }
  }
});

let HighScore = mongoose.model("HighScore", userSchema);
module.exports = HighScore;
