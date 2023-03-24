import express from "express";
import { assignTask } from "../../controller/company/assignTask.js";

const router = express.Router();

router.post("/assigntask/:employeeName/:compName", assignTask);


export default router;