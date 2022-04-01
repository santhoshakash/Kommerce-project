const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: String, required: true },
    quantity: { type: Number },
    sku: { type: String },
    inStock: { type: String, default: true },
    quantity: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
