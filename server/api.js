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
const Treasure = require("./models/treasure");

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
  // Checkpoint.find({ _id: req.query._id }).then((checkpoints) => res.send(checkpoints));
  Checkpoint.find().then((checkpoints) => res.send(checkpoints));
});

router.get("/checkpoint", (req, res) => {
  Checkpoint.find({ _id: req.query._id }).then((checkpoints) => res.send(checkpoints));
});

router.post("/checkpoint", auth.ensureLoggedIn, (req, res) => {
  const newCheckpoint = new Checkpoint({
    creator_id: req.user._id,
    creator_name: req.user.name,
    checkpoint_id: req.body.checkpoint_id,
    treasure_id: req.body.treasure_id,
    step: req.body.step,
    map: req.body.map,
    position: req.body.position,
    description: req.body.description,
    question: req.body.question,
    answer: req.body.answer,
  });

  newCheckpoint.save().then((checkpoint) => res.send(checkpoint));
});

router.get("/treasures", (req, res) => {
  // get all treasure
  Treasure.find({}).then((treasures) => res.send(treasures));
});

router.get("/treasure", (req, res) => {
  // get one treasure map
  Treasure.find({ _id: req.query._id }).then((treasures) => res.send(treasures));
});

router.post("/treasure", auth.ensureLoggedIn, (req, res) => {
  const newTreasure = new Treasure({
    creator_id: req.user._id,
    creator_name: req.user.name,
    treasureSteps: req.body,
  });

  newTreasure.save().then((treasure) => res.send(treasure));
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
