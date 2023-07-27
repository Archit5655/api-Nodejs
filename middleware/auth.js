import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import { json } from "express";

export const IsAuth= async(req,res,next)=>{

    const {token}  = req.cookies;

    if(!token){
     res.status(404),json({
         success: false,
         message:"Login first"
     })
    }
    const decode=jwt.verify(token,process.env.jwtsecret);
     req.user=await User.findById(decode._id)
next()
} 