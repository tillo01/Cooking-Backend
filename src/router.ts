/** @format */

import express from "express";
const router = express.Router();
import memberController from "./controller/member.controller";
// Member
router.post("/member/signup", memberController.signup);
router.post("/member/login", memberController.login);
router.get("/member/detail", memberController.verifyAuth);
router.post("/member/logout", memberController.verifyAuth, memberController.logout);

// Product

export default router;
