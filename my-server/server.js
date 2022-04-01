const dt = require("./config/db");
const express = require("express");

const app = express();
const UserRouter = require("./routers/authrouter");
const productRouter = require("./controller/productcontroller");
const cors = require("cors");

app.use(express.json());
app.use(cors({ origin: true }));
app.use("/user", UserRouter);
app.use("/api/products", productRouter);

const port = 3005;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
