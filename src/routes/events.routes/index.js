const express = require("express");
const router = new express.Router();
const TokenService = require("../../middleware/verifyToken.middleware");
const { multipleUpload } = require("../../middleware/fileUpload.middleware");
const {
  createEvent,
  updateEventById,
  getEventsByQuery
} = require("../../controllers/events.controllers");
const multipart = require('connect-multiparty');
const fs = require("fs");
const path = require("path");
// const multipartMiddleware = multipart({
//   uploadDir:'uploads/images'    
// });
let dir;

const multipartMiddleware = multipart(
  {uploadDir : `uploads/eventImage`}
);

//=======================Events Router===========================//
router.post("/", TokenService.verifyToken, multipartMiddleware, createEvent);
router.put("/:id", TokenService.verifyToken, multipleUpload, updateEventById);
router.get("/", getEventsByQuery);

module.exports = router;
