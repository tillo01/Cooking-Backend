import express, { Request ,Response} from "express";
import { T } from '../libs/types/common';



const restaurantController: T = {};
restaurantController.goHome = ((req:Request, res:Response)=>{
    try {
        res.send("Home Page");
        
    } catch (err) {
        console.log("Error,goHome", err);
          
    }
});

restaurantController.goLogin = ((req:Request,res:Response)=>{
try {
    res.send("Login Page")
} catch (err) {
    console.log("Erro,on login", err);
    
}
});

restaurantController.goSign = ((req:Request,res:Response)=>{
    try {
        res.send("Sign up Page")
        
    } catch (err) {
        console.log("Error, on sign up");
        
    }
});


export default restaurantController;