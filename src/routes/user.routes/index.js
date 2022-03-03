const express = require("express");
const router = new express.Router();
const TokenService = require("../../middleware/verifyToken.middleware");
const {
  getUserById,
  getUserInfo,
  getUsersByQuery,
  updateUserById,
  changePassword,
  addUser
} = require("../../controllers/users.controllers");
const { multipleUpload } = require("../../middleware/fileUpload.middleware");

//=======================User Router===========================//
router.put("/change-password", TokenService.verifyToken, changePassword);
router.get("/", TokenService.verifyToken, getUsersByQuery);
router.get("/info/", TokenService.verifyToken, getUserInfo);
router.get("/:id", TokenService.verifyToken, getUserById);
router.put("/:id", TokenService.verifyToken,multipleUpload, updateUserById);
router.post("/", TokenService.verifyToken,multipleUpload, addUser);

module.exports = router;
