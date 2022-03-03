const userModel = require("../../models/user.model");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

//======================== Create User ========================//
exports.createUser = async (userData, hashedPass) => {
  let user = new userModel({
    foreName: userData.foreName,
    surName: userData.surName,
    email: userData.email,
    password: hashedPass,
    userType: userData.userType,
    phoneNumber: userData.phoneNumber,
    status: "not-verified",
  });
  let response = await user.save();
  return response;
};

//=======================LOGIN===========================//

exports.loginUser = async (user) => {
  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      userType: user.userType,
    },
    JWT_SECRET
  );
  return { token: token };
};

//=======================Forgot Password===========================//

exports.forgotPassword = async (user) => {
  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      userType: user.userType,
    },
    JWT_SECRET
  );
  return { token: token };
};
