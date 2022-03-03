const express = require("express");
const router = new express.Router();
const TokenService = require("../../middleware/verifyToken.middleware");
const {
    getSermonByQuery,createSermon,updateSermonById
} = require("../../controllers/sermon.controllers");
const { multipleUpload } = require("../../middleware/fileUpload.middleware");

//=======================Sermon Router===========================//
router.get("/", getSermonByQuery);
router.post("/", TokenService.verifyToken, multipleUpload, createSermon);
router.put("/:id", TokenService.verifyToken, multipleUpload, updateSermonById);

module.exports = router;
