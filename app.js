import Express from "express";
import mongoose from "mongoose";

import userRouter from "./Routes/users.js"

import {ConnecttoDB} from "./data/databse.js"
ConnecttoDB();


const app = Express();
app.use(Express.json());
app.use(userRouter);

app.get("/", (req, res) => {
  res.send("working");
});






app.listen(4000, () => {
  console.log("server is working");
});
