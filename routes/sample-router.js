
const express = require("express");
const router = express.Router();
const Sample = require("../models/sample-model");

router.get("/", async (req, res) => {
  try {
    const samples = await Sample.find();
    res.json(samples);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
