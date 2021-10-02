const mongoose = require("mongoose");
const { MONGOURI } = require("../keys");

module.exports = () => {
    return mongoose.connect(MONGOURI);
};
