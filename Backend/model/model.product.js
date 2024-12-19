const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imagePaths: [{ type: String }], // ek se jysta image sotre karne kelye arrya
  rating: { type: Number, default: 0 },
  reviews: { type: Number, default: 0 },
  label: { type: String, default: "new" },
});

module.exports = mongoose.model("Product", productSchema);
