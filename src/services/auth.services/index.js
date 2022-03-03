const { findUserByEmail } = require("../../data/user.data");
const { createUser, loginUser, forgotPassword } = require("../../data/athu.data");
const { validateEmail, validatePassword } = require("../../utilities/validation.utilities");
const bcrypt = require("bcryptjs");

//=======================createUser===========================//
exports.createUser = async (body) => {
  const {
    foreName,
    surName,
    email,
    password: plainTextPassword,
    userType,
  } = body;

  if (!foreName || !surName || !email || !plainTextPassword || !userType) {
    throw "missing data";
  }
  validateEmail(email)

  let user = await findUserByEmail(email)
  if (user) {
    throw "Email already exists!";
  }

  validatePassword(plainTextPassword)
  const password = await bcrypt.hash(plainTextPassword, 10);
  user = await createUser(body, password);
  user.password = null
  return user;
};


//=======================Login User===========================//
exports.loginUser = async (body) => {
  const {
    email,
    password
  } = body;
  if (!body || !email || !password) {
    throw "missing data";
  }
  validateEmail(email)

  let user = await findUserByEmail(email)
  if (!user) {
    throw "You have entered an invalid username or password";
  }

  if (await bcrypt.compare(body.password, user.password)) {
    user = await loginUser(user)
  } else {
    throw "You have entered an invalid username or password";
  }
  return user;
};


//=======================Forgot Password===========================//
exports.forgotPassword = async (body) => {
  const {
    email
  } = body;
  if (!body || !email ) {
    throw "missing data";
  }
  validateEmail(email)

  let user = await findUserByEmail(email)
  if (!user) {
    throw "You have entered an invalid username or password";
  }
  
  else {
    user = await forgotPassword(user)
  }
  return user;
};
