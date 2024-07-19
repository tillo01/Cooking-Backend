/** @format */

import { Member } from "../libs/types/member";
import jwt from "jsonwebtoken";
import { AUTH_TIMER } from "../libs/types/config";
import Errors, { HttpCode } from "../libs/types/Errors";
import { Message } from "../libs/types/Errors";

class AuthService {
  constructor() {}

  public async createToken(payload: Member) {
    return new Promise((resolve, reject) => {
      const duration = `${AUTH_TIMER}h`;
      const plainPayload = JSON.parse(JSON.stringify(payload));
      console.log("plainPayload=>", plainPayload);

      jwt.sign(plainPayload, process.env.SECRET_TOKEN as string, { expiresIn: duration }, (err, token) => {
        console.log("err=>", err);

        if (err) reject(new Errors(HttpCode.UNAUTHORIZED, Message.TOKEN_CREATION_FAILED));
        else {
          resolve(token as string);
        }
      });
    });
  }
}

export default AuthService;
