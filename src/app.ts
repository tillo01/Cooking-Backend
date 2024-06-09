import  express  from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router";

/** 1-Entrance */
const app = express();
console.log("__dirname:", __dirname);
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

    
/** 2- Sessions */
app.set("views",path.join(__dirname, "views"));
app.set("view engine","ejs");

/** 3- Views */


/** 4- Routers */  
app.use("/",routerAdmin); // BSSR : EJS
app.use("/",router); // SPA: REACT

export default app; 