const {
  createEvent,
  updateEventById,
  getEventsByQuery
} = require("../../services/events.services");
const { sendResponse } = require("../../utilities/responseHandler.utilities");

//=======================Create Event===========================//
exports.createEvent = async (req, res, next) => {
  try {
    let event = await createEvent(req, next);
    sendResponse(res, event);
  } catch (err) {
    next(err);
  }
};

//=======================Update Event By Id===========================//
exports.updateEventById = async (req, res, next) => {
  try {
    let event = await updateEventById(req, next);
    sendResponse(res, event);
  } catch (err) {
    next(err);
  }
};

//=======================Get Events By Query===========================//
exports.getEventsByQuery = async (req, res, next) => {
  try {
    let event = await getEventsByQuery(req, next);
    sendResponse(res, event);
  } catch (err) {
    next(err);
  }
};
