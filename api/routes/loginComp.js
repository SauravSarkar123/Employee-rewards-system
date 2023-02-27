import express from "express";

import { loginComp } from "../controller/loginComp.js";
const router = express.Router();


router.post("/logincomp", loginComp);

export default router;