import mongoose from "mongoose";
import User from "./User.js";

const AddEmployee = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  Name: {
    type: String,
    ref: User,
    // required : true,
  },
  Email: {
    type: String,
    // required : true,
    ref: User,
  },
  Mobile: {
    type: Number,
    // required: true,
    ref: User,
  },
  Address: {
    type: String,
    // required : true,
    ref: User,
  },
  comName: {
    type: String,
    required: true,
  },
  comId: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("AddEmployee", AddEmployee);
