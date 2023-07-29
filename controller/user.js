import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { json } from "express";
import jwt from "jsonwebtoken";
import errorhandler from "../middleware/error.js";


export const Login = async (req, res, next) => {
try {
  const { email, password } = req.body;
  let user = await User.findOne({ email }).select("+password");
  if (!user) return next(new errorhandler("Invalid email or password", 400));
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return next(new errorhandler("Invalid email or password", 400));

  const token = jwt.sign({ _id: user._id }, process.env.jwtsecret);

  res
    .status(201)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
      samesite:process.env.NODE_ENV==="devlop" ? "lax":"none",
      secure:process.env.NODE_ENV==="devlop" ? false:true
    })
    .json({
      success: true,
      message: `Welcome back ${user.name}`,
    });
} catch (error) {
  next(error)
}
};
export const Logout = (req, res) => {

  res
  .status(200)
  .cookie("token", "", { expires: new Date(Date.now()),
    samesite:process.env.NODE_ENV==="devlop" ? "lax":"none",
      secure:process.env.NODE_ENV==="devlop" ? false:true })
  .json({
    success: true,
    message: "Logout successfully",
    user: req.user,
  });

};

export const Newuser = async (req, res, next) => {
 try {
  const { name, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user)
    return next(new errorhandler("USer alredy exist Please Login", 404));
  const hashpass = await bcrypt.hash(password, 10);
  user = await User.create({ name, email, password: hashpass });
  const token = jwt.sign({ _id: user._id }, process.env.jwtsecret);

  res
    .status(201)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
      samesite:process.env.NODE_ENV==="devlop" ? "lax":"none",
      secure:process.env.NODE_ENV==="devlop" ? false:true
    })
    .json({
      success: true,
      message: " registered Successfully",
    });
 } catch (error) {
  next(error)
 }
};
export const Showuserbyid = (req, res) => {

  res.status(200).json({
    success: true,
    user: req.user,
  });

};
