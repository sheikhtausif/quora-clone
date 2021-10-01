const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    pic: {
      type: String,
      default:
        "https://res.cloudinary.com/rsbrsb/image/upload/v1632979599/blank-profile-picture-973460_640_nqo8um.png",
    },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  const hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
  next();
});

userSchema.methods.checkPassword = function (password) {
  const passwordHash = this.password;
  return bcrypt.compareSync(password, passwordHash);
};

module.exports = mongoose.model("user", userSchema);
