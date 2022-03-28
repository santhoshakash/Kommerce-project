const fs = require("fs");

const Product = require("../model/product");

const data = JSON.parse(fs.readFileSync("./dummy-data.json"));

exports.store = async (req, res, next) => {
  console.log("hi");
  try {
    const senddata = await Product.create(data);
    console.log(senddata);
    res.send(senddata);
  } catch (error) {
    res.send("Data Exist");
    console.log("The data was already Exist");
    return error;
  }
  next();
  // senddata
  //   .then((senddata) => {
  //     res.json({
  //       status: "success",
  //       message: "signup successfull",
  //       data: result,
  //     });
  //   })
  //   .catch((err) => {
  //     res.json({
  //       status: "failed",
  //       message: "not  while hassing user",
  //     });
  //   });
};
