import express from "express";

import { getComp } from "../../controller/company/compDetails.js";
const router = express.Router();


router.get("/compdetails", getComp);

export default router;