const router = require("express").Router();
const {
  getAllCompany,
  getACompany,
} = require("../controller/companyController.js");
const upload = require("../utils/Upload");
const Company = require("../models/Company");
// Add company
router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const company = await Company.create({
      name: req.body.name,
      date: req.body.date,
      image: req.file.filename,
      members: req.body.members,
      phone: req.body.phone,
      desc: req.body.desc,
    });
    res.status(201).json({
      success: true,
      message: "Company Added!",
      company,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to add company!",
      company,
    });
  }
});

// Get all company
router.route("/all").get(getAllCompany);

// Get a company
router.route("/:id").get(getACompany);

module.exports = router;
