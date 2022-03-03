const mongoose = require("mongoose");

const SermonSchema = new mongoose.Schema(
  {
    sermonDate: { type: Date },
    sermonDescription: { type: String },
    sermonAuthor: { type: String },
    sermonTitle: { type: String, required: true },
    sermonVideoLink: { type: String },
    sermonPermalink: { type: String, required: true, unique: true },
    sermonImage: {
      path: {
        type: String,
      },
      mimetype: {
        type: String,
      },
      filename: {
        type: String,
      },
      size: {
        type: String,
      },
      destination: {
        type: String,
      },
    },
    sermonPosted: {
      sermonPostedDate: { type: Date },
      sermonPostedBy: { type: String, required: true },
    },
    sermonEdited: [
      {
        sermonEditedDate: { type: Date },
        sermonEditedBy: { type: String },
      },
    ],
  },
  { collection: "sermons" }
);

const model = mongoose.model("SermonSchema", SermonSchema);

module.exports = model;
