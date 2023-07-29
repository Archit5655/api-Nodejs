// import { json } from "express"
import errorhandler from "../middleware/error.js";
import { Task } from "../models/task.js";

export const newtask = async (req, res, next) => {
 try {
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
 } catch (error) {
  next(error)
 }
};
export const getalltask= async(req,res,next)=>{
try {
  const userid=req.user._id;
  const tasks=await Task.find({user:userid})
  res.status(201).json({
      success:true,
      tasks
  })
} catch (error) {
  next(error)
}
}
export const updatetask= async(req,res,next)=>{
try {
  const id=req.params.id
const task =await Task.findById(id)
if(!task) return next(new errorhandler("Task not found ",404))

task.iscomplete=!task.iscomplete
await task.save();

    res.status(201).json({
        success:true,
       message:"task updtaed"
    })
} catch (error) {
  next(error)
}
}
export const deletetask= async(req,res,next)=>{
try {
  const id=req.params.id
  const task =await Task.findById(id)
  await task.deleteOne();
  if(!task) return next(new Error("Invalid Id"))
    res.status(201).json({
        success:true,
        message:"task deleted"

    })
} catch (error) {
  next(error)
}
}
