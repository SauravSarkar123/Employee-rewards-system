import express from "express";
import { Completiondate } from "../../controller/employee/Completiondate.js";
const router = express.Router();

router.put('/completion/:taskId',Completiondate )

export default router;