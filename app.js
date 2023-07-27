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
app.use(userRouter);
app.use(cookieParser());


app.get("/", (req, res) => {
  res.send("working");
});
