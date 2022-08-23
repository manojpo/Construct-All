const mongoose = require("mongoose");
const conpamySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  date: {
    type: String,
  },
  image: {
    type: String,
  },
  members: {
    type: Number,
  },
  phone: {
    type: Number,
  },
  desc: {
    type: String,
  },
});
const companyModel = new mongoose.model("Company", conpamySchema);
module.exports = companyModel;
