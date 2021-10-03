const express = require("express");

const router = express.Router();

const User = require("../models/user.model");
const Post = require("../models/post.model");
const Question = require("../models/question.model");

const authenticate = require("../middleware/authenticate");

router.get("/", authenticate, async (req, res) => {
    const users = await User.find().lean().exec();
    return res.status(200).json({ users });
});

router.get("/user/:id", authenticate, (req, res) => {
    User.findOne({ _id: req.params.id })
        .select("-password")
        .then((user) => {
            Post.find({ postedBy: req.params.id })
                .populate("postedBy", "_id name")
                .exec((err, posts) => {
                    if (err) {
                        return res.status(422).json({ error: err });
                    }
                    res.json({ user, posts });
                });
        })
        .catch((err) => {
            return res.status(404).json({ error: "User not found" });
        });
});

router.put("/follow", authenticate, (req, res) => {
    User.findByIdAndUpdate(
        req.body.followId,
        {
            $push: { followers: req.user._id },
        },
        {
            new: true,
        },
        (err, result) => {
            if (err) {
                return res.status(422).json({ error: err });
            }
            User.findByIdAndUpdate(
                req.user._id,
                {
                    $push: { following: req.body.followId },
                },
                { new: true }
            )
                .select("-password")
                .then((result) => {
                    res.json(result);
                })
                .catch((err) => {
                    return res.status(422).json({ error: err });
                });
        }
    );
});

router.put("/unfollow", authenticate, (req, res) => {
    User.findByIdAndUpdate(
        req.body.unfollowId,
        {
            $pull: { followers: req.user._id },
        },
        {
            new: true,
        },
        (err, result) => {
            if (err) {
                return res.status(422).json({ error: err });
            }
            User.findByIdAndUpdate(
                req.user._id,
                {
                    $pull: { following: req.body.unfollowId },
                },
                { new: true }
            )
                .select("-password")
                .then((result) => {
                    res.json(result);
                })
                .catch((err) => {
                    return res.status(422).json({ error: err });
                });
        }
    );
});

router.put("/updatepic", authenticate, (req, res) => {
    User.findByIdAndUpdate(
        req.user._id,
        { $set: { pic: req.body.pic } },
        { new: true },
        (err, result) => {
            if (err) {
                return res.status(422).json({ error: "pic canot post" });
            }
            res.json(result);
        }
    );
});

router.post("/search-users", (req, res) => {
    let userPattern = new RegExp("^" + req.body.query);
    User.find({ name: { $regex: userPattern } })
        .select("_id name")
        .then((user) => {
            res.json({ user });
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;
