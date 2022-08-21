const router = require("express").Router();
const { loginUser, getUserDetail } = require("../controller/userController.js");
const User = require("../models/User");
const upload = require("../utils/Upload");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register
router.post("/register", upload.single("image"), async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email: email });
  if (user) {
    res.status(400).json({
      success: false,
      message: "Email already exists!",
    });
  } else {
    try {
      const salt = await bcryptjs.genSalt(10);
      const hashPassword = await bcryptjs.hash(req.body.password, salt);
      const doc = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
        image: req.file.filename,
        phone: req.body.phone,
        address: req.body.address,
      });
      await doc.save();

      res.status(201).send({
        message: "Registration success!",
        doc,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        success: false,
        message: "Registration Failed!",
      });
    }
  }
});

// Login
router.route("/login").post(loginUser);

// Get a user
router.route("/:id").get(getUserDetail);

module.exports = router;
