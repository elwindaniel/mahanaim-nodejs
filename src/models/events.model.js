const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    eventName: { type: String, required: true },
    eventOnlineOnly: { type: Boolean, required: true },
    eventDescription: { type: String, require: true },
    eventStartDate: { type: String },
    eventEndDate: { type: String },
    eventStartTime: { type: String },
    eventEndTime: { type: String },
    eventLink: [
      {
        platform:{ type: String },
        Link:{ type: String },
        description:{ type: String },
      }
    ],
    eventCreated: {
      eventCreatedDate: { type: Date, default: Date.now },
      eventCreatedBy: { type: String, required: true },
    },
    eventUpdated: [
      {
        eventUpdatedDate: { type: Date },
        eventUpdatedBy: { type: String },
      },
    ],
    eventPermalink: { type: String, required: true, unique: true },
    eventAddressLine1: {
      type: String,
      // require: true,
    },
    eventAddressLine2: {
      type: String,
    },
    eventStreet: {
      type: String,
    },
    eventCity: {
      type: String,
      // require: true,
    },
    eventDistrict: {
      type: String,
      // require: true,
    },
    eventState: {
      type: String,
      // require: true,
    },
    eventCountry: {
      type: String,
      // require: true,
    },
    eventZipcode: {
      type: String,
      // require: true,
    },
    eventImage: {
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
    eventGuest: [{
      featuringName: { type: String },
      featuringDignity: { type: String },
      image: { type: String },
      featuringImage: {
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
    }],
    eventIsRepeated: { type: Boolean, require: true },
    eventRepeatedDays: [
      {
        weekDayName: { type: String },
        weekNumber: { type: Number },
        month: { type: String },
      },
    ],
    eventSchedules: [
      {
        scheduleName: { type: String },
        scheduleDate: { type: String },
        scheduleStartTime: { type: String },
        scheduleEndTime: { type: String },
        scheduleDescription: { type: String },
        scheduleGuest: [{
          featuringName: { type: String },
          featuringDignity: { type: String },
          image: { type: String },
          featuringImage: {
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
        }],
      },
    ],
  },
  { collection: "events" }
);

const model = mongoose.model("EventSchema", EventSchema);

module.exports = model;
