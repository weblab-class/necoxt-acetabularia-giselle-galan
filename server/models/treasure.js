const mongoose = require("mongoose");

const TreasureSchema = new mongoose.Schema({
  creator_id: String,
  creator_name: String,
  treasureSteps: [{
    step_id: String,
    step: Number,
    map: String,
    ownMap: Object,
    position: {
      x: Number,
      y: Number,
    },
    description: String,
    question: String,
    answer: String,
  }],

  treasureContent: {
    treasure_is: String,
    treasure_hint: String,
    map_title: String,
    treasure_category: String,
  },
});

// compile model from schema
module.exports = mongoose.model("treasure", TreasureSchema);