const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;

studentSchem = {};

const marksSchema = new mongoose.Schema({
  studentName: {
    type: ObjectId,
  },
  subject: {
    type: String,
  },
  marks: {
    type: Number,
  },
  user: {
    type: ObjectId,
  },
});
