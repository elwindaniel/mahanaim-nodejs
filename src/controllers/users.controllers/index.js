const {
  getUserById,
  getUserInfo,
  getUsersByQuery,
  updateUserById,
  changePassword,
  addUser
} = require("../../services/user.services");
const { sendResponse } = require("../../utilities/responseHandler.utilities");

//=======================Get User By Id===========================//
exports.getUserById = async (req, res, next) => {
  try {
    let user = await getUserById(req, next);
    sendResponse(res, user);
  } catch (err) {
    next(err);
  }
};

//=======================Get User Info===========================//
exports.getUserInfo = async (req, res, next) => {
  try {
    let user = await getUserInfo(req, next);
    sendResponse(res, user);
  } catch (err) {
    next(err);
  }
};

//=======================get All Users===========================//
exports.getUsersByQuery = async (req, res, next) => {
  try {
    let user = await getUsersByQuery(req, next);
    sendResponse(res, user);
  } catch (err) {
    next(err);
  }
};

//=======================Update User By Id===========================//
exports.updateUserById = async (req, res, next) => {
  try {
    let user = await updateUserById(req, next);
    sendResponse(res, user);
  } catch (err) {
    next(err);
  }
};

//=======================Change Password===========================//
exports.changePassword = async (req, res, next) => {
  try {
    let user = await changePassword(req, next);
    sendResponse(res, user);
  } catch (err) {
    next(err);
  }
};
//=======================Add User===========================//
exports.addUser = async (req, res, next) => {
  try {
    let user = await addUser(req, next);
    sendResponse(res, user);
  } catch (err) {
    next(err);
  }
};
