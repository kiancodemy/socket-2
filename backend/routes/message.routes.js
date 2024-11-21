import express from "express";
import { sendmessage } from "../controlers/message.controler.js";
import { authUser } from "../middleware/Authuser.js";
const router = express.Router();
router.post("/send/:id", authUser, sendmessage);

export default router;
