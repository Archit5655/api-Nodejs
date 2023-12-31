import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  iscomplete: {
    type: Boolean,
    default: false,

  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required: true,

  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

export const Task= mongoose.model("Task", schema);
