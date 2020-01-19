const mongoose = require("mongoose");

const CheckpointSchema = new mongoose.Schema({
  creator_id: String,
  creator_name: String,
  map: String,
  location: {
    xPosition: Number,
    yPosition: Number,
  },
  description: String,
  question: String,
  answer: String,
});

// compile model from schema
module.exports = mongoose.model("checkpoint", CheckpointSchema);
