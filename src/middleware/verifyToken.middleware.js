require("dotenv").config();
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

exports.verifyToken = async (req, res, next) => {
  try {
    const bearerHeader = req.headers["authorization"];
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    const user = jwt.verify(bearerToken, JWT_SECRET);
    req.user = user;
    next();
  } catch (err) {
    res.status(403).send({
      message: "auth failed",
    });
  }
};
