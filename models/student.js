const mongoose = require("mongoose");

const mySchema = new mongoose.Schema({
  name: String,
  roll_no: Number,
  city: String,
});

module.exports = mongoose.model("Student", mySchema);
