import Express from "express";
import { User } from "../models/user.js";
const router = Express.Router();
import { Newuser, Showuserbyid, getalluser,Login } from "../controller/user.js";

router.get("/users/all", getalluser);

router.post("/users/new",Newuser );
router.post("/users/login",Login );

router.get("/userid",Showuserbyid);

export default router;
