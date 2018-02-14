const mongoose = require("mongoose");
var express = require("express");
var router = express.Router();
const User = require("../models/user");
const passport = require("passport");

module.exports = app => {
  app.post("/api/register", function(req, res) {
    console.log("HIIIIII");
    console.log(req.body.username);
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
  })
}
