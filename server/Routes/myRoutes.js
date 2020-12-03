import express from "express";
import { getEmp, addEmp } from "../Controllers/RouteController.js";

const router = express.Router();

router.get("/", getEmp);
router.post("/", addEmp);

export default router;
