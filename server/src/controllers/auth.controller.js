const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../keys");
const bcrypt = require("bcryptjs");
const User = require("../models/user.model");

const newToken = (user) => {
  return jwt.sign({ user: user }, JWT_SECRET_KEY);
};

const register = async (req, res) => {
  const { name, email, password, pic } = req.body;
  if (!email || !password || !name) {
    return res.status(422).json({ error: "Please Fill All Required Fields" });
  }
  User.findOne({ email: email })
    .then((signedUser) => {
      if (signedUser) {
        return res
          .status(422)
          .json({ error: "This Email ID Already Registered With Us" });
      }
      bcrypt.hash(password, 8).then((hashedPassword) => {
        const user = new User({
          email,
          password: hashedPassword,
          name,
          pic,
        });
        user
          .save()
          .then((user) => {
            res.status(200).json({
              message: `${user.name} Thank you for joined Instagram Family `,
            });
          })
          .catch((err) => {
            return res.status(400).json({ err: err.message });
          });
      });
    })
    .catch((err) => {
      console.log("err:", err);
    });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "Please Fill All Required Fields" });
  }
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return res.status(422).json({ error: "Invalid Email or Password" });
      }
      bcrypt.compare(password, user.password).then((matchedUser) => {
        if (matchedUser) {
          // return res.status(200).json({ message: `Welcome Again  ${user.name} `, });
          const token = jwt.sign({ _id: user._id }, JWT_SECRET_KEY);
          res.json({
            token: token,
            user: user,
          });
        } else {
          return res.status(422).json({ error: "Invalid Email or Password" });
        }
      });
    })
    .catch((err) => {
      console.log("err:", err);
    });
};

module.exports = { register, login };
