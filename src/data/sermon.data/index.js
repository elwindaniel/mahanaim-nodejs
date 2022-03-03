const sermonModel = require("../../models/sermon.model");

//=======================Sermons By Query ===========================/
exports.findSermonsByQuery = async (query) => {
    console.log("sermon")
  let sermon = await sermonModel.find(query);
  return sermon;
};

//======================== Create Sermons ========================//
exports.createSermon = async (body) => {
  let sermon = new sermonModel(body);
  let response = await sermon.save();
  return response;
};

//======================== Update Sermons By Id ========================//
exports.updateSermonById = async (id, body) => {
  let sermon = await sermonModel.updateOne({ _id: id }, body);
  return { message: "Updated Successfully" };
};
