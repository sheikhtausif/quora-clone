const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../keys");

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET_KEY, (err, user) => {
      if (err) return reject(err);

      if (user) return resolve(user);
    });
  });
};

const authenticate = async function (req, res, next) {
  // we need to ensure that token is sent in the request headers
  bearerToken = req?.headers?.authorization;
  // if token not sent then send 400 error

  // else check the token to be a bearer token // Bearer ${token} ["Bearer", token]
  if (!bearerToken || !bearerToken.startsWith("Bearer "))
    return res
      .status(400)
      .send({ status: "failed", message: "Please send the bearer token" });
  // if not then send 400 error

  // else we will verify that the token using jwt is valid and send
  const token = bearerToken.split(" ")[1];

  let user;
  try {
    user = await verifyToken(token);
  } catch (err) {
    // if not then send 400 error
    return res.status(400).send({
      status: "failed",
      message: "Please send a valid bearer token",
      err: err,
    });
  }

  // else we will add the user to the req
  req.user = user;

  // then we will do next()
  next();
};

module.exports = authenticate;
