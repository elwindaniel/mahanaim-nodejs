const e = require("express");
const {
  createEvent,
  updateEventById,
  findEventsByQuery,
} = require("../../data/events.data");
const { findUserByEmail } = require("../../data/user.data");

//=======================Create Event===========================//
exports.createEvent = async (req) => {
  const { eventName, eventPermalink, eventDescription } =
    req.body;
  const { body, files } = req;
  if (!req.user.email) {
    throw "Not a valid user";
  }
  let user = await findUserByEmail(req.user.email);
  if (user.userType === "admin" || user.userType === "pastor") {
    if (
      !eventName ||
      !eventPermalink ||
      !eventDescription
    ) {
      throw "missing data";
    }
    let eventCreated = {
      eventCreatedDate: new Date(),
      eventCreatedBy: req.user.id,
    };
    body.eventCreated = eventCreated;
    if (files) {
      if (files.eventSchedules) {
        for (let i = 0; i < files.eventSchedules.length; i++) {
          for (let j = 0; j < files.eventSchedules[i].scheduleGuest.length; j++) {
            let featuringImage = {
              path: files.eventSchedules[i].scheduleGuest[j].featuringImage.path,
              mimetype: files.eventSchedules[i].scheduleGuest[j].featuringImage.type,
              destination: files.eventSchedules[i].scheduleGuest[j].featuringImage.path,
              filename: files.eventSchedules[i].scheduleGuest[j].featuringImage.name,
              size: files.eventSchedules[i].scheduleGuest[j].featuringImage.size,
            }
            body.eventSchedules[i].scheduleGuest[j].featuringImage = featuringImage
          }
        }
      }
      if (files.eventGuest) {
        for (let i = 0; i < files.eventGuest.length; i++) {
          let featuringImage = {
            path: files.eventGuest[i].featuringImage.path,
            mimetype: files.eventGuest[i].featuringImage.type,
            destination: files.eventGuest[i].featuringImage.path,
            filename: files.eventGuest[i].featuringImage.name,
            size: files.eventGuest[i].featuringImage.size,
          }
          body.eventGuest[i].featuringImage = featuringImage
        }
      }
      if (files.eventImage) {
        let eventImage = {
          path: files.eventImage.path,
          mimetype: files.eventImage.type,
          destination: files.eventImage.path,
          filename: files.eventImage.name,
          size: files.eventImage.size,
        };
        body.eventImage = eventImage;
      }
    }
    const event = await createEvent(body);
    return event;
  } else {
    throw "You are not allowed!";
  }
};

//=======================Update Event By Id===========================//
exports.updateEventById = async (req) => {
  const { body, files } = req;
  const id = req.params.id;
  if (!req.user.email) {
    throw "Not a valid user";
  }
  let user = await findUserByEmail(req.user.email);
  if (user.userType === "admin" || user.userType === "pastor") {
    let eventUpdated = [];
    eventUpdated.push({
      eventUpdatedDate: new Date(),
      eventUpdatedBy: req.user.id,
    });
    body.eventUpdated = eventUpdated;
    if (files) {
      if (files.eventSchedules) {
        for (let i = 0; i < files.eventSchedules.length; i++) {
          for (let j = 0; j < files.eventSchedules[i].scheduleGuest.length; j++) {
            let featuringImage = {
              path: files.eventSchedules[i].scheduleGuest[j].featuringImage.path,
              mimetype: files.eventSchedules[i].scheduleGuest[j].featuringImage.type,
              destination: files.eventSchedules[i].scheduleGuest[j].featuringImage.path,
              filename: files.eventSchedules[i].scheduleGuest[j].featuringImage.name,
              size: files.eventSchedules[i].scheduleGuest[j].featuringImage.size,
            }
            body.eventSchedules[i].scheduleGuest[j].featuringImage = featuringImage
          }
        }
      }
      if (files.eventGuest) {
        for (let i = 0; i < files.eventGuest.length; i++) {
          let featuringImage = {
            path: files.eventGuest[i].featuringImage.path,
            mimetype: files.eventGuest[i].featuringImage.type,
            destination: files.eventGuest[i].featuringImage.path,
            filename: files.eventGuest[i].featuringImage.name,
            size: files.eventGuest[i].featuringImage.size,
          }
          body.eventGuest[i].featuringImage = featuringImage
        }
      }
      if (files.eventImage) {
        let eventImage = {
          path: files.eventImage.path,
          mimetype: files.eventImage.type,
          destination: files.eventImage.path,
          filename: files.eventImage.name,
          size: files.eventImage.size,
        };
        body.eventImage = eventImage;
      }
    }
    const event = await updateEventById(id, body);
    return event;
  } else {
    throw "You are not allowed!";
  }
};

//=======================Get Events By Query===========================//
exports.getEventsByQuery = async (req) => {
  let query = req.query;
  let event = await findEventsByQuery(query);
  if (!event) {
    throw "No Data Found";
  }
  return event;
};
