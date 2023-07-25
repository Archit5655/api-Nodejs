import Express from "express";
import { config } from "dotenv";

import userRouter from "./Routes/users.js";

config({
  path: "./data/config.env",
});

export const app = Express();
app.use(Express.json());
app.use(userRouter);

app.get("/", (req, res) => {
  res.send("working");
});
