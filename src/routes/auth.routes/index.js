const express = require("express");
const {
  register,
  login,
  forgotPassword,
} = require("../../controllers/auth.controllers");
const { multipleUpload } = require("../../middleware/fileUpload.middleware");

const router = new express.Router();

//=======================authenticate===========================//
router.post("/login", login);
router.post("/create-user", register);
router.post("/forgot-password", forgotPassword);

module.exports = router;
