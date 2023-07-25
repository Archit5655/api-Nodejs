import Express from "express";
import { User } from "../models/user.js";
const router = Express.Router();
import { Newuser, Showuserbyid, getalluser } from "../controller/user.js";

router.get("/users/all", getalluser);

router.post("/users/new",Newuser );

router.get("/userid",Showuserbyid);

export default router;
