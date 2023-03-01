import express from "express";
import { verifyToken } from "../../utils/verifyToken.js";

import { loginUser } from "../../controller/employee/login.js";
const router = express.Router();

router.get("/checkauthentication", verifyToken, (req,res,next)=>{
    res.send("You are logged")
})


router.post("/login", loginUser);

export default router;