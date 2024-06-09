import express  from "express";
const router = express.Router();
import memberController from "./controller/member.controller";

router.get("/", memberController.goHome);

router.get("/login", memberController.goLogin);

router.get("/signup", memberController.goSign);


export default router;


