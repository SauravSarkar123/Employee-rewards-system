import express from "express";
import { Assignedtask } from "../../controller/employee/viewassigned.js";
const router = express.Router();

router.get("/viewtask", Assignedtask)

export default router;