const mongoose = require("mongoose");
var express = require("express");
var router = express.Router();
const HighScore = require("../models/highscore");
const passport = require("passport");

module.exports = app => {
  // GET highscores
  app.get("/api/highscores", function(req, res, next) {
    HighScore.find({}, function(err, allHighScores) {
      if (err) {
        console.log(err);
      } else {
        res.send(allHighScores);
      }
    });
  });

  // CREATE new highscore
  app.post("/api/user/:id/highscores", function(req, res, next) {
    User.findById(req.params.id, function(err, user) {
      if (err) {
        console.log(err);
      } else {
        const score = req.body.score;
        const owner = {
          id: req.body.ownerID
        };

        const highscore = new HighScore({
          score: score,
          owner: owner
        });

        HighScore.create(highscore, function(err, newHighScore) {
          if (err) {
            console.log(err);
          } else {
            user.highscore = newHighScore;
            user.save();
            res.send(newHighScore);
          }
        });
      }
    });
  });

// UPDATE a highscore
  app.put("/api/user/:id/highscores/:highscore_id", function(req, res) {
    HighScore.findByIdAndUpdate(
      req.params.highscore_id,
      req.body.highscore,
      { new: true },
      function(err, updatedHighScore) {
        if (err) {
          res.redirect("/");
        } else {
          const highscore = req.body.highscore;
          updatedHighScore.score = highscore;
          updatedHighScore.save(function(err) {
            if (err) {
              console.log(err);
              res.redirect("/");
            } else {
              res.send(updatedHighScore);
            }
          });
        }
      }
    );
  });
}
