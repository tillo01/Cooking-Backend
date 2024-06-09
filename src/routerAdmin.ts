import express  from "express";
const routerAdmin = express.Router();
import restaurantController from "./controller/restaurant.controller";

routerAdmin.get("/", restaurantController.goHome);

routerAdmin.get("/login", restaurantController.goLogin);

routerAdmin.get("/signup", restaurantController.goSign);


export default router;


