const router = require("express").Router();
const {
  sendContact,
  getAllContact,
  getAContact,
} = require("../controller/contactController");

// Add contact
router.route("/send").post(sendContact);

// Get all contact
router.route("/all").get(getAllContact);

// Get a contact
router.route("/:id").get(getAContact);
module.exports = router;
