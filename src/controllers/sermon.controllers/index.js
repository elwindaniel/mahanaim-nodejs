const {
  getSermonByQuery,
  updateSermonById,
  createSermon,
} = require("../../services/sermon.services");
const { sendResponse } = require("../../utilities/responseHandler.utilities");

//=======================Get Sermon By Query===========================//
exports.getSermonByQuery = async (req, res, next) => {
  try {
    let sermon = await getSermonByQuery(req, next);
    sendResponse(res, sermon);
  } catch (err) {
    next(err);
  }
};

//=======================Create sermon===========================//
exports.createSermon = async (req, res, next) => {
  try {
    let sermon = await createSermon(req, next);
    sendResponse(res, sermon);
  } catch (err) {
    next(err);
  }
};

//=======================Update sermon By Id===========================//
exports.updateSermonById = async (req, res, next) => {
  try {
    let sermon = await updateSermonById(req, next);
    sendResponse(res, sermon);
  } catch (err) {
    next(err);
  }
};
