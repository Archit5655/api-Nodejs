import Express from "express";
import { config } from "dotenv";

import userRouter from "./Routes/users.js";
import taskRouter from "./Routes/task.js";
import cookieParser from "cookie-parser";
import { errormiddleware } from "./middleware/error.js";
import cors from "cors"
config({
  path: "./data/config.env",
});

export const app = Express();
app.use(Express.json());
app.use(cookieParser());
app.use(cors({
  origin:[process.env.frontend_uri],
  methods:["GET","POST","PUT","DELETE"],
  credentials:true,
  
}))
app.use(userRouter);
app.use(taskRouter);



app.get("/", (req, res) => {
  res.send("working");
});
app.use(errormiddleware)