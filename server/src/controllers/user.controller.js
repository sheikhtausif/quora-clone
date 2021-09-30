const express = require("express");

const router = express.Router();

const User = require("../models/user.model");

const authenticate = require("../middleware/authenticate");

router.get("/", authenticate, async (req, res) => {
  const users = await User.find().lean().exec();

  return res.status(200).json({ users });
});

router.get("/:id", authenticate, async function (req, res) {
  const users = await User.findById(req.params.id).lean().exec();

  return res.status(200).json({ users });
});

module.exports = router;
