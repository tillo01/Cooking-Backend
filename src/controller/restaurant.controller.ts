import express, { Request ,Response} from "express";
import { T } from '../libs/types/common';

import MemberService from "../models/Member.service";



const restaurantController: T = {};
restaurantController.goHome = ((req:Request, res:Response)=>{
    try {
        res.send("Home Page");
        // send/ json / redirect / end / render
        
    } catch (err) {
        console.log("Error,goHome", err);
          
    }
});

restaurantController.getLogin = ((req:Request,res:Response)=>{
try {
    res.send("Login Page")
} catch (err) {
    console.log("Erro,on login", err);
    
}
});

restaurantController.getSign = ((req:Request,res:Response)=>{
    try {
        res.send("Sign up Page")
        
    } catch (err) {
        console.log("Error, on sign up");
        
    }
});


restaurantController.processLogin = ((req:Request,res:Response)=>{
    try {
        console.log("processLogin");
        res.send("DONE");
        
    } catch (err) {
        console.log("Error, on processLgin");
        
    }
});

restaurantController.processSignup = ((req:Request,res:Response)=>{
    try {
        console.log("processSignup");
        res.send("DONE");
        
    } catch (err) {
        console.log("Error, on processSignup");
        
    }
});


export default restaurantController;