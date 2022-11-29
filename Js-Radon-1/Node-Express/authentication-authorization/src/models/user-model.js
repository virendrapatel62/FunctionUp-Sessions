const mongoose = require("mongoose");

const userTypes = ["USER", "ADMIN"];
const nameSchema = {
  type: String,
  required: true,
};
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    firstName: nameSchema,
    lastName: nameSchema,
    password: {
      type: String,
      required: true,
    },
    userType: {
      type: String,
      default: userTypes[0],
      enum: userTypes,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAtx",
    },
  }
);

exports.User = mongoose.model("User", userSchema);
