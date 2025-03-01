const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  googleid: String,
  profileDescription: String,
  aboutMe: Object,
  searched: Array,
  liked: Array,
});

// compile model from schema
module.exports = mongoose.model("user", UserSchema);
