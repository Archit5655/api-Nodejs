import Express from "express";
import { User } from "../models/user.js";
const router = Express.Router();
import {
  Newuser,
  Showuserbyid,
  getalluser,
  Login,
  Logout,
} from "../controller/user.js";
import { IsAuth } from "../middleware/auth.js";

router.get("/users/all", getalluser);

router.post("/users/new", Newuser);
router.post("/users/login", Login);
router.post("/users/logout", Logout);

router.get("/userid", IsAuth, Showuserbyid);

export default router;
