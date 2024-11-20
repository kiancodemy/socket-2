import { login, sigup, logout } from "../controlers/auth.controler.js";
import express from "express";
const router = express.Router();
router.post("/login", login);
router.post("/signup", sigup);
router.post("/logout", logout);

export default router;
