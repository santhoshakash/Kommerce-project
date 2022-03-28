const express = require("express");
const router = express.Router();

const collection = require("../maindata.js/senddata");
const logincontroller = require("../controller/logincontroller");
const productcontroller = require("../controller/productcontroller");

router.post("/send", collection.store);
router.post("/login", logincontroller.login);
router.post("/signup", logincontroller.signup);
router.post("/", productcontroller.readAll);

module.exports = router;
