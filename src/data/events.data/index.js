const eventModel = require("../../models/events.model");

//======================== Create User ========================//
exports.createEvent = async (body) => {
  let event = new eventModel(body);
  let response = await event.save();
  return response;
};

//======================== Update Event By Id ========================//
exports.updateEventById = async (id, body) => {
  let event = await eventModel.updateOne({ _id: id }, body);
  return { message: "Updated Successfully" };
};

//======================== Find Events By Query ========================//
exports.findEventsByQuery = async (query) => {
  let events = await eventModel.find(query);
  return events;
};
