const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../keys");

const User = require("../models/user.model");

const newToken = (user) => {
  return jwt.sign({ user: user }, JWT_SECRET_KEY);
};

const register = async (req, res) => {
  let user;
  try {
    // check if the email provided already exists in the database
    user = await User.findOne({ email: req.body.email }).lean().exec();

    if (user)
      return res.status(400).send({
        status: "failed",
        message: "Please try with a different email and password",
      });

    // if no then create a user with the information provided in the request body
    user = await User.create(req.body);

    if (!user)
      return res
        .status(500)
        .send({ status: "failed", message: "Please try again later" });

    // create a token for that user and return it
    const token = newToken(user);

    return res.status(201).json({ token: token, user });
  } catch (err) {
    return res.status(500).send({ status: "failed", message: err.message });
  }
};

const login = async (req, res) => {
  try {
    // if user with the email exists
    let user = await User.findOne({ email: req.body.email }).exec();

    // if not then throw an error of status code 400
    if (!user)
      return res.status(400).send({
        status: "failed",
        message: "Please try with a different email and password",
      });

    // if yes then we need to check the password
    const match = user.checkPassword(req.body.password);

    if (!match)
      return res.status(400).send({
        status: "failed",
        message: "Please try with a different email and password",
      });

    // if the password match then create the token and send the token
    const token = newToken(user);

    return res.status(201).json({ token: token, user });
  } catch (err) {
    return res
      .status(500)
      .send({ status: "failed", message: "Please try again later" });
  }
};

module.exports = { register, login };
