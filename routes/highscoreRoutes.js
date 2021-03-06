const mongoose = require("mongoose");
var express = require("express");
var router = express.Router();
const HighScore = require("../models/highscore");
const User = require("../models/user");
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
        const score = req.body.highscore;
        const username = req.body.username;
        const owner = {
          id: req.body.ownerID
        };

        const highscore = new HighScore({
          score: score,
          username: username,
          owner: owner
        });

        HighScore.create(highscore, function(err, newHighScore) {
          if (err) {
            console.log(err);
          } else {
            user.highscore = newHighScore;
            user.save();
            newHighScore.save();
            res.send(newHighScore);
          }
        });
      }
    });
  });

  // UPDATE a user's highscore
  app.put("/api/user/:id/highscores", function(req, res) {
    User.findByIdAndUpdate(
      req.params.id,
      req.body.highscore,
      { new: true },
      function(err, updatedUser) {
        if (err) {
          console.log(err);
          res.redirect("/");
        } else {
          const highscore = req.body.highscore;
          updatedUser.highscore = highscore;
          updatedUser.save(function(err) {
            if (err) {
              console.log(err);
              res.redirect("/");
            } else {
              res.send(updatedUser);
            }
          });
        }
      }
    );
  });

  // FIND TOP 5 HIGH SCORES
  app.get("/api/highscores", function(req, res, next) {
    HighScore.find({}, function(err, allHighScores) {
      if (err) {
        console.log(err);
        res.status(401).send(err);
      } else {
        res.send(allHighScores);
      }
    });
  });
};
