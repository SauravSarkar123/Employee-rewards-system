import express from "express";

import {addEmployee} from "../../controller/company/addEmployee/addemp.js"
const router = express.Router();


router.post("/addemployee", addEmployee);

export default router;