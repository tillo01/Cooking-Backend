import express, { Request ,Response} from "express";
import { T } from '../libs/types/common';

import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.type";





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


restaurantController.processLogin = async (req:Request,res:Response)=>{
    try {
        console.log("processLogin");
console.log("body:",req.body);

const input: LoginInput =req.body;
const memberService = new MemberService();
const result = await memberService.processLogin(input);

    
        res.send(result);
        
    } catch (err) {
        console.log("Error, on processLgin");
        res.send(err)
        
    }
};

restaurantController.processSignup = async (req:Request,res:Response)=>{
    try {
        console.log("processSignup");
        console.log("Body:", req.body);
        
        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;

        const memberService = new MemberService();
        const result = await memberService.processSignup(newMember);
        res.send(result);
        
    } catch (err) {
        console.log("Error, on processSignup",err);
        res.send(err);
    }
}


export default restaurantController;