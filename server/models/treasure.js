const mongoose = require("mongoose");

const TreasureSchema = new mongoose.Schema({
  creator_id: String,
  creator_name: String,
  treasureSteps: [{
    step_id: String,
    step: Number,
    map: String,
    position: {
      x: Number,
      y: Number,
    },
    description: String,
    question: String,
    answer: String,
  }],
});

// compile model from schema
module.exports = mongoose.model("treasure", TreasureSchema);