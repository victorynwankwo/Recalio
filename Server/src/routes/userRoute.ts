import express from "express";
import { register, login } from "../Controller/Authentication/user";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;