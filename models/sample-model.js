// models/sample-model.js

const mongoose = require("mongoose");

const sampleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Sample", sampleSchema);
