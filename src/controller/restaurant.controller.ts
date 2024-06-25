import express, { NextFunction, Request ,Response} from "express";
import { T } from '../libs/types/common';

import MemberService from "../models/Member.service";
import {AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.type";
import Errors, { HttpCode, Message } from "../libs/types/Errors";



const memberService = new MemberService();




const restaurantController: T = {};
restaurantController.goHome = ((req:Request, res:Response)=>{
    try {
        console.log("goHome");
        
        res.render("home");
        // send/ json / redirect / end / render
        
    } catch (err) {
        console.log("Error,goHome", err);
        res.redirect("/admin");

          
    }
});

restaurantController.getLogin = ((req:Request,res:Response)=>{
try {
    res.render("login");
} catch (err) {
    console.log("Erro,on login", err);
    res.redirect("/admin");
    
}
});

restaurantController.getSignup = ((req:Request,res:Response)=>{
    try {
        res.render("signup");
        
    } catch (err) {
        console.log("Error, on sign up");
        res.redirect("/admin");
        
    }
});



restaurantController.processSignup = async (req:AdminRequest,res:Response)=>{
    try {
        console.log("processSignup");
        console.log("Body:", req.body);
        const file = req.file;
if(!file)
    throw new Errors(HttpCode.BAD_RQUEST,Message.SOMETHING_WENT_WRONG);
        
        const newMember: MemberInput = req.body;
        newMember.memberImage = file?.path;
        newMember.memberType = MemberType.RESTAURANT;

       const result = await memberService.processSignup(newMember);
       
            req.session.member = result;
            req.session.save(function(){
                res.redirect("/admin/product/all");
            });


        
    } catch (err) {
        console.log("Error, on processSignup",err);
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert("${message}"); window.location.replace('admin/signup');</script>`);
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
   res.redirect("/admin/product/all");

});


    
        // res.send(result);
        
    } catch (err) {
        console.log("Error, on processLgin");
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG
        res.send(`<script> alert("${message}"); window.location.replace('admin/login')</script>`);

        
        
    }
};



restaurantController.logout = async (req:AdminRequest,res:Response)=>{
    try {
        console.log("logout");

       req.session.destroy(function(){
        res.redirect("/admin");
       })
        
    } catch (err) {
        console.log("Error, on processLgin",err);
        res.redirect("/admin");

        
    }
};

restaurantController.checAuthSession = async (req:AdminRequest,res:Response)=>{
    try {
        console.log("checAuthSession");

if (req.session?.member) res.send(`<script> alert("${req.session.member.memberNick}")</script>`) ;
    else res.send(`<script> alert("${Message.NOT_AUTHNTICATED}")</script>`);



    } catch (err) {
        console.log("Error, on processLgin",err);
        res.send(err)
        
    }
};


restaurantController.verifyRestaurant = (req:AdminRequest,
     res:Response,
      next:NextFunction)=>{
            if(req.session?.member?.memberType === MemberType.RESTAURANT) {
                req.member = req.session.member;
                next();

            }else{
                const message = Message.NOT_AUTHNTICATED;
                res.send(`<script> alert("${message}"); window.location.replace('/admin/login');</script>`);
            }    
};



export default restaurantController;