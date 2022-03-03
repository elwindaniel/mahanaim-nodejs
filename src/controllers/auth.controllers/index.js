const {
  createUser,
  loginUser,
  forgotPassword,
} = require("../../services/auth.services");
const { sendResponse } = require("../../utilities/responseHandler.utilities");

//=======================Register===========================//
exports.register = async (req, res, next) => {
  const { body } = req;
  console.log(req.body)
  try {
    let user = await createUser(body, next);
    sendResponse(res, user);
  } catch (err) {
    next(err);
  }
};

//=======================Login===========================//
exports.login = async (req, res, next) => {
  const { body } = req;
  try {
    let user = await loginUser(body, next);
    sendResponse(res, user);
  } catch (err) {
    next(err);
  }
};

//=======================Forgot Password===========================//
exports.forgotPassword = async (req, res, next) => {
  const { body } = req;
  try {
    let user = await forgotPassword(body, next);
    sendResponse(res, user);
  } catch (err) {
    next(err);
  }
};
