var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var User = mongoose.model("user");

router.get("/users", function(req, res, next)
{
  User.find(function(error, users, count)
  {
    res.send(users);
  })
})

router.get("/users/:id", function(req, res, next)
{
  User.findOne({_id: req.params.id}, function(error, user)
  {
    res.send(user);
  })
})

router.post("/users", function(req, res, next)
{
  new User({
    username: req.body.username,
    email: req.body.email
  })
      .save(function(error, user, count)
      {
        res.send(user);
      })
})

router.put("/users/:id", function(req, res, next)
{
  User.findOneAndUpdate({_id: req.params.id},  { username: req.body.username, email: req.body.email},
      function(error, user, count)
      {
        res.send(user);
      })
})

router.delete("/users/:id", function(req, res, next)
{
  User.findOneAndRemove({_id: req.params.id})
      .exec(function(error, user, count)
      {
        res.send("Usuario eliminado");
      })
})

module.exports = router;