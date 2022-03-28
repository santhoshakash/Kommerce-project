const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    // required: [true],
    unique: [true, , "Email id already exist"],
    lowercase: true,
    // validate: [validator.isEmail, "Please provide a valid emails"],
  },
  password: {
    type: String,
    // required: [true],
  },
  role: {
    type: String,
    default: "user",
  },
  passwordConfirm: {
    type: String,
    // required: [true, "Please confirm your password"],
    // validate: {
    //   // This only works on CREATE and SAVE!!!
    //   validator: function (el) {
    //     return el === this.password;
    //   },
    //   message: "Passwords are not the same!",
    // },
  },
});
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
