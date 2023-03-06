import express from "express";

import {addEmployee} from "../../controller/company/addEmployee/addemp.js"
import { verifyAdmin, verifyToken } from "../../utils/verifyToken.js";
const router = express.Router();


router.get("/checkadmin", verifyAdmin, (req,res,next)=>{
    res.send("u r admin")
})


router.post("/addemployee", addEmployee);

export default router;