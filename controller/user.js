import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { json } from "express";
import jwt from "jsonwebtoken";


export const getalluser = async (req, res) => {};
export const Login = async (req, res, next) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email }).select("+password");
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "Invalid email or password",
    });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(404).json({
      success: false,
      message: "Invalid email or password",
    });
  }

  const token = jwt.sign({ _id: user._id }, process.env.jwtsecret);

  res
    .status(201)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
    })
    .json({
      success: true,
      message:   `Welcome back ${user.name}`,
    });
};

export const Newuser = async (req, res) => {
  const { name, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    return res.status(404).json({
      success: false,
      message: "USer alredy exist Please Login",
    });
  }
  const hashpass = await bcrypt.hash(password, 10);
  user = await User.create({ name, email, password: hashpass });
  const token = jwt.sign({ _id: user._id }, process.env.jwtsecret);

  res
    .status(201)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
    })
    .json({
      success: true,
      message: " registered Successfully",
    });
};
export const Showuserbyid = async (req, res) => {
   const id="dfcw" 
   const { token } = req.cookies['token']

   if(!token){
    res.status(404),json({
        success: false,
        message:"Login first"
    })
   }
   const decode=jwt.verify(token,process.env.jwtsecret);
   const user=await User.findById(decode._id)
   res.status(200).json({
    success:true,
    user,
   })



    
};
