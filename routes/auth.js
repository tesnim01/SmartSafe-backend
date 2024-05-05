const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../model/Login");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log("Received login request:", req.body);
  // Find user by username and password
  const user = await User.findOne({ username, password });

  // If user not found or password doesn't match
  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  // If login successful
  res.status(200).json({ message: "Login successful" });
});

module.exports = router;
