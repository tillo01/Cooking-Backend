import express  from "express";
const routerAdmin = express.Router();
import restaurantController from "./controller/restaurant.controller";
import productController from "./controller/product.controller";

/* Restaurant */ 
routerAdmin.get("/", restaurantController.goHome);

routerAdmin
.get("/login", restaurantController.getLogin)
.post("/login", restaurantController.processLogin);


routerAdmin
.get("/signup", restaurantController.getSignup)
.post("/signup", restaurantController.processSignup);

routerAdmin.get("/check-me", restaurantController.checAuthSession);
routerAdmin.get("/logout", restaurantController.logout);


/* Product */ 

routerAdmin.get("/product/all",
     restaurantController.verifyRestaurant,
     productController.getAllProducts);

routerAdmin.post("/product/create", 
    restaurantController.verifyRestaurant,
    productController.createNewProduct);

routerAdmin.post("/product/:id", 
    restaurantController.verifyRestaurant,
    productController.updateChoosenProduct);


/* user  */ 

export default routerAdmin;


