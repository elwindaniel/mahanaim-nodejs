const {
  findUserById,
  findUsersByQuery,
  updateUserById,
  changePassword,
  addUser,
  findUserByEmail
} = require("../../data/user.data");
const {
  validateEmail,
  validatePassword,
} = require("../../utilities/validation.utilities");
const bcrypt = require("bcryptjs");

//=======================User By Id===========================//
exports.getUserById = async (req) => {
  const id = req.params.id;
  let user = await findUserById(id);
  if (!user) {
    throw "No Data Found";
  }
  return user;
};

//=======================User Info===========================//
exports.getUserInfo = async (req) => {
  const id = req.user.id;
  let user = await findUserById(id);
  if (!user) {
    throw "No Data Found";
  }
  return user;
};

//=======================Get Users By Query===========================//
exports.getUsersByQuery = async (req) => {
  let query = req.query;
  let user = await findUsersByQuery(query);
  if (!user) {
    throw "No Data Found";
  }
  return user;
};

//=======================Update User By Id===========================//
exports.updateUserById = async (req, res) => {

  const { body, files } = req;
  const id = req.params.id;

  if (body.email) {
    validateEmail(body.email);
  }

  if (body.password) {
    validatePassword(body.password);
    body.password = await bcrypt.hash(body.password, 10);
  }
  let user = await findUserById(id);
  if (!user) {
    throw "No Data Found";
  }
  if (user.userType != "admin") {
    body.userType = user.userType;
    body.status = user.status;
  }
  if (files) {
    if (files.profileImage) {
      body.profileImage = files.profileImage[0].path;
    }
  }
  user = await updateUserById(id, body);
  return user;
};
//=======================Add User===========================//
exports.addUser = async (req, res) => {

  const { body, files } = req;

  if (!req.user.email) {
    throw "Not a valid user";
  }
  let user = await findUserByEmail(req.user.email);
  if (user.userType === "admin" || user.userType === "pastor") {
    let newUser = await findUserByEmail(body.email)
    if (newUser) {
      throw "Email already exists!";
    }
    if (body.email) {
      validateEmail(body.email);
    }
    if (files) {
      if (files.profileImage) {
        let profileImage = {
          path: files.profileImage.path,
          mimetype: files.profileImage.type,
          destination: files.profileImage.path,
          filename: files.profileImage.name,
          size: files.profileImage.size,
        };
        body.profileImage = profileImage;
      }
    }
    user = await addUser(body);
    return user;
  } else {
    throw "You are not allowed!";
  }

};

//=======================Change Password===========================//

exports.changePassword = async (req) => {

  const { newPassword: plainTextPassword } = req.body;

  if (!plainTextPassword || typeof plainTextPassword !== "string") {
    throw "Invalid password";
  } else {
    const id = req.user.id;
    const password = await bcrypt.hash(plainTextPassword, 10);
    user = await changePassword(id, password);
  }
  return user;
};
