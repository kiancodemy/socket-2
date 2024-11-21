import express from "express";
import { getAllUser } from "../controlers/user.controler.js";
import { authUser } from "../middleware/Authuser.js";
const router = express.Router();
router.get("/users", authUser, getAllUser);

export default router;
