const router = require("express").Router();
const Company = require("../models/Company");

// Get all company
exports.getAllCompany = async (req, res) => {
  const company = await Company.find();
  if (company) {
    res.status(200).json({
      succesS: true,
      company,
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Failed to get companies!",
    });
  }
};

// Get a controller
exports.getACompany = async (req, res) => {
  const company = await Company.findById(req.params.id);
  if (company) {
    res.status(200).json({
      succesS: true,
      company,
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Failed to get the company",
    });
  }
};
