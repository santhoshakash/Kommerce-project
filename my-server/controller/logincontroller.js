const User = require("../model/model");
const bcrypt = require("bcryptjs");

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    //   if (email == "" || password == "") {
    //     res.json({
    //       status: "failed",
    //       message: "Empty credintals",
    //     });
    const data = await User.findOne({ email });
    console.log(data);
    if (!data) throw new Error("unauthorised user");
    if (data) {
      const hashedpassword = data.password;
      const valid = await bcrypt.compare(password, hashedpassword);
      console.log(valid);

      if (valid) {
        console.log(valid, data);
        return res.status(200).send(data);
      } else {
        // console.log("wrong password");
        return res.send({
          status: 400,
          message: "Invalid password",
        });
      }
    }
  } catch (err) {
    // console.log("error");
    return res.send({
      status: 400,
      message: err.message,
    });
  }

  //   res.send("hi");
};

exports.signup = async (req, res, next) => {
  const newUser = await User.create({
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  // const token = signToken(newUser._id);

  res.status(201).json({
    status: "success",
    // token,
    data: {
      user: newUser,
    },
  });
  console.log("Signup Success");
};
