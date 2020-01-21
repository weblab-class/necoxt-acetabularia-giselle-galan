/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");
// const Map = require("./models/map");
const Checkpoint = require("./models/checkpoint");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socket = require("./server-socket");

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user) socket.addUser(req.user, socket.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|
router.get("/checkpoints", (req, res) => {
  // get all checkpoints
  Checkpoint.find({}).then((checkpoints) => res.send(checkpoints));
});

router.post("/checkpoint", (req, res) => {
  const newCheckpoint = new Checkpoint({
    creator_id: "req.user._id",
    creator_name: "req.user.name",
    map: req.body.map,
    location: req.body.location,
    description: req.body.description,
    question: req.body.question,
    answer: req.body.answer,
  });

  newCheckpoint.save().then((checkpoint) => res.send(checkpoint));
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
