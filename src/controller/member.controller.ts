import express, { Request ,Response} from "express";
import { T } from '../libs/types/common';
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import MemberService from "../models/Member.service";
import Errors from "../libs/types/Errors";

const memberService = new MemberService();

const memberController: T = {};
// REACT

memberController.signup = async (req:Request, res:Response) =>{
  try {
    console.log("signup");
    console.log("body",req.body);

    const newMember:MemberInput = req.body,
     memberService = new MemberService(),
   result:Member = await memberService.signup(newMember);


  // res.json({ member:result});




     
    
} catch (err) {
  console.log("Error, om processing");
  if(err instanceof Errors) res.status(err.code).json(err);
else res.status(Errors.standard.code) .json(Errors.standard);
  // res.json({ });
  
    
}
}



memberController.login = async (req:Request, res:Response) =>{
  try {
    console.log("login");
    console.log("body:",req.body);
    const input:LoginInput = req.body,
     memberService = new MemberService(),
     result = await memberService.login(input);

    //  TO Do TOKEns
    

    res.send(result);
  } catch (err) {
    console.log("Error, on login");
    if(err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code) .json(Errors.standard);
    
  }
}



export default memberController;