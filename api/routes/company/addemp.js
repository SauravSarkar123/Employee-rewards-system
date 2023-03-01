import express from "express";

import { addEmployee } from "../../controller/company/addEmployee/addemp";
const router = express.Router();


router.post("/addemployee", addEmployee);

export default router;