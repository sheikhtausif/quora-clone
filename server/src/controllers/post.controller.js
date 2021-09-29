const express = require("express");
const Mongoose = require("mongoose");
const router = express.Router();
const authenticate = require("../middleware/authenticate");
const Post = require("../models/post.model");

router.post("/", authenticate, async function (req, res) {
  try {
    const post = await Post.create(req.body);
    return res.status(201).send(post);
  } catch (err) {
    console.log("err in posting post", err);
  }
});

router.get("/", authenticate, async function (req, res) {
  try {
    const posts = await Post.find()
      .populate("postedBy", "_id name")
      .sort("-createdAt")
      .lean()
      .exec();
    return res.status(200).send(posts);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.get("/myposts", authenticate, async function (req, res) {
  try {
    const posts = await Post.find({ postedBy: req.user._id })
      .populate("postedBy", "_id name")
      .sort("-createdAt")
      .lean()
      .exec();
    return res.status(200).send(posts);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

module.exports = router;
