const express = require("express");
const Mongoose = require("mongoose");
const router = express.Router();

const Question = require("../models/question.model");

router.post("/", async function (req, res) {
  const question = await Question.create(req.body);
  return res.status(201).send(question);
});

router.get("/", async function (req, res) {
  try {
    const question = await Question.find().lean().exec();
    return res.status(200).send(question);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

module.exports = router;
