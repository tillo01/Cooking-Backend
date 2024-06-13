import express  from "express";
const routerAdmin = express.Router();
import restaurantController from "./controller/restaurant.controller";

/* Restaurant */ 
routerAdmin.get("/", restaurantController.goHome);

routerAdmin
.get("/login", restaurantController.getLogin)
.post("/login", restaurantController.processLogin);


routerAdmin.get("/signup", restaurantController.getSign)
.post("/signup", restaurantController.processSignup);
/* Product */ 

/* user  */ 

export default routerAdmin;


