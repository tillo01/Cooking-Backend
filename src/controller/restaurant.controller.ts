import express, { Request ,Response} from "express";
import { T } from '../libs/types/common';

import MemberService from "../models/Member.service";
import {AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.type";
import { Message } from "../libs/types/Errors";


const memberService = new MemberService();




const restaurantController: T = {};
restaurantController.goHome = ((req:Request, res:Response)=>{
    try {
        console.log("goHome");
        
        res.render("home");
        // send/ json / redirect / end / render
        
    } catch (err) {
        console.log("Error,goHome", err);
          
    }
});

restaurantController.getLogin = ((req:Request,res:Response)=>{
try {
    res.render("login");
} catch (err) {
    console.log("Erro,on login", err);
    
}
});

restaurantController.getSignup = ((req:Request,res:Response)=>{
    try {
        res.render("signup");
        
    } catch (err) {
        console.log("Error, on sign up");
        
    }
});



restaurantController.processSignup = async (req:AdminRequest,res:Response)=>{
    try {
        console.log("processSignup");
        console.log("Body:", req.body);
        
        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;

       const result = await memberService.processSignup(newMember);
       
            req.session.member = result;
            req.session.save(function(){
                res.send(result);
            });


        
    } catch (err) {
        console.log("Error, on processSignup",err);
        res.send(err);
    }
}

restaurantController.processLogin = async (req:AdminRequest,res:Response)=>{
    try {
        console.log("processLogin");
console.log("body:",req.body);

const input: LoginInput =req.body;
const result = await memberService.processLogin(input);

req.session.member = result;
req.session.save(function(){
    res.send(result);

});


    
        res.send(result);
        
    } catch (err) {
        console.log("Error, on processLgin");
        res.send(err)
        
    }
};

restaurantController.checAuthSession = async (req:AdminRequest,res:Response)=>{
    try {
        console.log("checAuthSession");

if (req.session?.member) res.send(`<script> alert("${req.session.member.memberNick})</script>`) ;
    else res.send(`<script> alert("${Message.NOT_AUTHNTICATED})</script>`);



    } catch (err) {
        console.log("Error, on processLgin");
        res.send(err)
        
    }
};




export default restaurantController;