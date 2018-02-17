const mongoose = require("mongoose");

let highscoreSchema = new mongoose.Schema({
  score: Number,
  username: String,
  owner: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "HighScore"
    }
  }
});

let HighScore = mongoose.model("HighScore", highscoreSchema);
module.exports = HighScore;
