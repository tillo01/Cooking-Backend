import {ObjectId} from "mongoose";
import { MemberStatus, MemberType } from "../enums/member.type";

export interface Member {
    _id:ObjectId;
    memberType: MemberType;
    memebrStatus: MemberStatus;
    memberNick:string;
    memberPhone:string;
    memberPassword:string;
    memberAddress?:string;
    memberDesc?:string;
    memberImage?:string;
    memberPoints:number;
    createdAt:Date;
    updatedAt:Date;

}



export interface MemberInput {
    memberType?: MemberType;
    membrStatus?: MemberStatus;
    memberNick:string;
    memberPhone:string;
    memberPassword:string;
    memberAddress?:string;
    memberDesc?:string;
    memberImage?:string;
    memberPoints?:number;

}