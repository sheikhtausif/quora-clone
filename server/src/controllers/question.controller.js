const express = require("express");
const Mongoose = require("mongoose");
const router = express.Router();
const authenticate = require("../middleware/authenticate");
const Question = require("../models/question.model");

router.post("/", authenticate, async function (req, res) {
  try {
    const question = await Question.create(req.body);
    return res.status(201).send(question);
  } catch (err) {
    console.log("err in posting post", err);
  }
});

router.get("/", authenticate, async function (req, res) {
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

router.put("/upvote", authenticate, (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { upvotes: req.user._id },
    },
    {
      new: true,
    }
  ).exec((err, result) => {
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
  ).exec((err, result) => {
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
