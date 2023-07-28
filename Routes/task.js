import  Express  from "express";
import { getalltask, newtask } from "../controller/task.js";
import { IsAuth } from "../middleware/auth.js";

const router = Express.Router();

router.post("/user/newtask",IsAuth,newtask)
router.get("/user/getalltask",IsAuth,getalltask)


export default router;