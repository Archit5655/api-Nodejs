import { User } from "../models/user.js";

export const getalluser= async (req, res) => {
    const users = await User.find({});
  console.log(req.query);
    res.json({
      success: true,
      users,
    });
  };
  export const Newuser =async (req, res) => {
    const { name, email, password } = req.body;
  
    await User.create({
      name,
      email,
      password,
    });
  
    res.status(201).cookie("hello", "lol").json({
      success: true,
      message: "REgisted successfully",
    });
  }
  export const Showuserbyid= async (req, res) => {
    const { id } = req.query;
    const user = await User.findById(id);
  
    res.json({
      success: true,
      user,
    });
  }