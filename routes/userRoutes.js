const mongoose = require("mongoose");
var express = require("express");
var router = express.Router();
const User = require("../models/user");
const passport = require("passport");

module.exports = app => {
  app.post("/api/register", function(req, res) {
    User.register(
      new User({ username: req.body.username, highscore: req.body.highscore }),
      req.body.password,
      function(err, user) {
        if (err) {
          console.log(err);
          res.status(401).send(err);
        } else {
          passport.authenticate("local")(req, res, function() {
            console.log("Success register");
            res.send(user);
          })
        }
      }
    )
  });

  app.post("/api/login", function(req, res, next) {
    passport.authenticate("local", function(err, user, info) {
      if (err) {
        res.status(500).send(err);
      } else if (!user) {
        res.status(401).send("Not existing user");
      } else {
        req.logIn(user, function(err) {
          if (err) {
            res.status(500).send(err);
          } else {
            console.log("Success login");
            res.send(user);
          }
        });
      }
    })(req, res);
  });
}
