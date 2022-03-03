const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    foreName: { type: String },
    surName: { type: String },
    dateOfBirth: { type: String },
    dateOfBaptism : { type: String },
    dateOfAnniversary: { type: String },
    churchLocation: { type: String },
    phoneNumber: { type: Number, unique: true },
    password: { type: String, required: true },
    userType: {
      type: String,
      enum: ["admin", "pastor", "member", "guest"],
    },
    status: {
      type: String,
      enum: ["verified", "not-verified"],
    },
    address: [
      {
        addressLine1: {
          type: String,
          require: true,
        },
        addressLine2: {
          type: String,
        },
        street: {
          type: String,
        },
        city: {
          type: String,
          require: true,
        },
        district: {
          type: String,
          // require: true,
        },
        state: {
          type: String,
          // require: true,
        },
        country: {
          type: String,
          require: true,
        },
        zipcode: {
          type: String,
          require: true,
        },
      },
    ],
    // profileImage:{ type: String },
    profileImage: {
      image_path: {
        type: String,
      },
      image_binary: {
        type: String,
      },
      image_fieldName: {
        type: String,
      },
      image_original_filename: {
        type: String,
      },
      image_size: {
        type: String,
      },
      image_type: {
        type: String,
      },
      image_name: {
        type: String,
      },
    },
  },
  { collection: "users" }
);

const model = mongoose.model("UserSchema", UserSchema);

module.exports = model;
