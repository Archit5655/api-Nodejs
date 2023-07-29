import  Express  from "express";
import { deletetask, getalltask, newtask, updatetask } from "../controller/task.js";
import { IsAuth } from "../middleware/auth.js";

const router = Express.Router();

router.post("/user/newtask",IsAuth,newtask)
router.get("/user/getalltask",IsAuth,getalltask)
router.route("/user/:id").put(IsAuth,updatetask).delete(IsAuth,deletetask)


export default router;