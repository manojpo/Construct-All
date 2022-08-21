const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  area: {
    type: String,
  },
  phone: {
    type: Number,
  },
});

const contactModel = new mongoose.model("Contact", contactSchema);
module.exports = contactModel;
