import express from "express";

import { oneTask} from "../../controller/company/oneTask.js";

const router = express.Router();


router.get("/gettask/:empName/:task", oneTask)

export default router;
