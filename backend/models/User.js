const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  image: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
});
const userModel = new mongoose.model("User", userSchema);
module.exports = userModel;
