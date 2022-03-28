const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  fileName: {
    type: "String",
  },
  productName: {
    type: "String",
    // required: true,
    // trim: true,
    // maxlength: 60,
  },
  productDesc: {
    type: "String",
  },
  productPrice: {
    type: "String",
  },
  productCategory: {
    type: "String",
  },
  productQty: {
    type: "string",
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
