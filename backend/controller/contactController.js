const router = require("express").Router();
const Contact = require("../models/Contact");

// Send contact
exports.sendContact = async (req, res) => {
  const contact = await Contact.create(req.body);
  if (contact) {
    res.status(201).json({
      success: true,
      message: "Message sent!",
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Failed to contact the admin!",
    });
  }
};

// Get all contact
exports.getAllContact = async (req, res) => {
  const contact = await Contact.find();
  if (contact) {
    res.status(200).json({
      success: true,
      contact,
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Failed to get contacts!",
    });
  }
};

// Get a contact
exports.getAContact = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (contact) {
    res.status(200).json({
      success: true,
      contact,
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Failed to get contact!",
    });
  }
};
