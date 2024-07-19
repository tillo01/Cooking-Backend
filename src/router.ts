/** @format */

import express from "express";
const router = express.Router();
import memberController from "./controller/member.controller";
// Member
router.post("/member/signup", memberController.signup);
router.post("/member/login", memberController.login);
router.get("/member/detail", memberController.verifyAuth);

// Product

export default router;
