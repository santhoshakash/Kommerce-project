const Product = require("../model/product");
const fs = require("fs");

exports.readAll = async (req, res) => {
  try {
    const products = await Product.find({});
    console.log("hello");
    // console.log(res.body.products);
    res.json(products);
  } catch (err) {
    console.log(err, "productController.readAll error");
    res.status(500).json({
      errorMessage: "Please try again later",
    });
  }
};
