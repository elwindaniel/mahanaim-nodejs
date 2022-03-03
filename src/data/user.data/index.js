const userModel = require("../../models/user.model");

//=======================Add User===========================/
exports.addUser = async (userData) => {
  let user = new userModel(userData);
  let response = await user.save();
  return response;
};

//======================== Get User by email ========================//
exports.findUserByEmail = async (email) => {
  let user = await userModel.findOne({
    email: email,
  });
  return user;
};

//=======================User By Id===========================/
exports.findUserById = async (id) => {
  let user = await userModel.findById(id);
  return user;
};

//=======================Users By Query ===========================/
exports.findUsersByQuery = async (query) => {
  let user = await userModel.find(query);
  return user;
};

//=======================Update User By Id===========================/
exports.updateUserById = async (id, body) => {
  let user = await userModel.updateOne({ _id: id }, body);
  return { message: "Updated Successfully" };
};

//=======================Change Password===========================/
exports.changePassword = async (id, password) => {
  await userModel.updateOne(
    { _id: id },
    {
      $set: { password },
    }
  );
  return { message: "Password Changed" };
};

