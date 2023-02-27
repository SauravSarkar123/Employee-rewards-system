import express from "express";
import { registerUser } from "../controller/register.js";
import { loginUser } from "../controller/login.js";
const router = express.Router();

router.post("/register", registerUser);


export default router;