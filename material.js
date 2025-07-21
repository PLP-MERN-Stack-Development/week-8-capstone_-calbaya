const mongoose = require("mongoose");
const MaterialSchema = new mongoose.Schema({
  title: String,
  description: String,
  subject: String,
  grade: String,
  price: Number,
  image: String,
});
module.exports = mongoose.model("Material", MaterialSchema);
