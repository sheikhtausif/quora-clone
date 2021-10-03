// require('dotenv').config()
const PORT = 8000;
const connect = require("./configs/db");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const { register, login } = require("./controllers/auth.controller");
const userController = require("./controllers/user.controller");
const questionController = require("./controllers/question.controller");
const postController = require("./controllers/post.controller");

app.post("/register", register);
app.post("/login", login);

app.use("/users", userController);
app.use("/posts", postController);
app.use("/questions", questionController);

app.listen(PORT, async function () {
    await connect();
    console.log("connection has been established to mongoAtlas");
    console.log(`App Listening on port http://localhost:${PORT}`);
});
