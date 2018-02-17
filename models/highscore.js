const mongoose = require("mongoose");

let highscoreSchema = new mongoose.Schema({
  score: Number,
  username: String,
  owner: {
    id: {
      type: Number,
      ref: "HighScore"
    }
  }
});

let HighScore = mongoose.model("HighScore", highscoreSchema);
module.exports = HighScore;
