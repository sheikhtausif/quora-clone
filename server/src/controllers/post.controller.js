const express = require("express");
const Mongoose = require("mongoose");
const router = express.Router();

const authenticate = require("../middleware/authenticate");

const Post = require("../models/post.model");

router.post("/", authenticate, async function (req, res) {
  try {
    const { title, body, photo } = req.body;
    if (!title || !body || !photo) {
      return res.status(422).json({ error: "Please Add All Required Fields" });
    }

    req.user.user.password = undefined;

    const post = {
      title,
      body,
      photo: photo,
      postedBy: req.user.user,
    };
    const post2 = await Post.create(post);
    return res.status(201).json({ post2 });
  } catch (err) {
    res.status(404).json({ err2: err.message });
  }
});

router.get("/", authenticate, async function (req, res) {
  try {
    const posts = await Post.find()
      .populate("postedBy", "_id name pic")
      .populate("comments.postedBy", "_id name")
      .sort("-createdAt")
      .lean()
      .exec();
    return res.status(200).json({ posts });
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.get("/myposts", authenticate, async function (req, res) {
  try {
    const posts = await Post.find({ postedBy: req.user.user._id })
      .populate("postedBy", "_id name")
      .lean()
      .exec();
    return res.status(200).json({ posts });
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.get("/followingposts", authenticate, function (req, res) {
  // if postedBy in following list by $in
  Post.find({ postedBy: { $in: req.user.following } })
    .populate("postedBy", "_id name photo")
    .populate("comments.postedBy", "_id name")
    .sort("-createdAt")
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/upvote", authenticate, (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { upvotes: req.user._id },
    },
    {
      new: true,
    }
  )
    .populate("comments.postedBy", "_id name")
    .populate("postedBy", "_id name")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.json(result);
      }
    });
});
router.put("/downvote", authenticate, (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $pull: { upvotes: req.user._id },
    },
    {
      new: true,
    }
  )
    .populate("comments.postedBy", "_id name")
    .populate("postedBy", "_id name")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.json(result);
      }
    });
});

router.put("/comment", authenticate, (req, res) => {
  const comment = {
    text: req.body.text,
    postedBy: req.user._id,
  };
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { comments: comment },
    },
    {
      new: true,
    }
  )
    .populate("comments.postedBy", "_id name")
    .populate("postedBy", "_id name")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.json(result);
      }
    });
});

module.exports = router;
