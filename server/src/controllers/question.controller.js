const express = require("express");
// const mongoose = require("mongoose");
const router = express.Router();
const authenticate = require("../middleware/authenticate");
const Question = require("../models/question.model");

router.post("", authenticate, async function (req, res) {
  const { question } = req.body;
  console.log("question:", question);
  if (!question) {
    return res.status(400).json({ error: "Please Add All Required Fields" });
  }

  req.user.user.password = undefined;

  const post = new Question({
    question,
    postedBy: req.user.user,
  });

  post
    .save()
    .then((result) => {
      res.status(200).json({ post: result });
    })
    .catch((err) => {
      console.log("err:", err);
    });
});

router.get("", authenticate, async function (req, res) {
  try {
    const questions = await Question.find()
      .populate("postedBy", "_id name")
      .sort("-createdAt")
      .lean()
      .exec();
    return res.status(200).send(questions);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.get("/myquestions", authenticate, async function (req, res) {
  try {
    const questions = await Question.find({ postedBy: req.user.user._id })
      .populate("postedBy", "_id name")
      .lean()
      .exec();
    return res.status(200).send(questions);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});
router.get("/followingposts", authenticate, function (req, res) {
  // if postedBy in following list by $in
  Post.find({ postedBy: { $in: req.user.user.following } })
    .populate("postedBy", "_id name pic")
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
      $push: { upvotes: req.user.user._id },
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
      $pull: { upvotes: req.user.user._id },
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
    postedBy: req.user.user._id,
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
