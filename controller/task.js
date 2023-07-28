// import { json } from "express"
import { Task } from "../models/task.js";

export const newtask = async (req, res, next) => {
  console.log("workinh2");
  const { title, desc } = req.body;
  await Task.create({
    title,
    desc,
    user: req.user,
  });
  res.status(201).json({
    success: true,
    message: "Task added successfully",
  });
};
export const getalltask= async(req,res,next)=>{
    const userid=req.user._id;
    const tasks=await Task.find({user:userid})
    res.status(201).json({
        success:true,
        tasks
    })




}
