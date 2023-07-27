import Express from "express";
import { config } from "dotenv";

import userRouter from "./Routes/users.js";
import cookieParser from "cookie-parser";
5
config({
  path: "./data/config.env",
});

export const app = Express();
app.use(Express.json());
app.use(cookieParser());
app.use(userRouter);


app.get("/", (req, res) => {
  res.send("working");
});
