/** @format */

import { ExtendedRequest } from "../libs/types/member";
import { T } from "../libs/types/common";
import Errors, { HttpCode } from "../libs/types/Errors";
import { Response } from "express";
import OrderService from "../models/Order.service";

const orderService = new OrderService();

const orderCotroller: T = {};
orderCotroller.createOrder = async (req: ExtendedRequest, res: Response) => {
  const result = await orderService.createOrder(req.member, req.body);
  res.status(HttpCode.CREATED).json(result);
  try {
    console.log("createOrder");
  } catch (err) {
    console.log("Error on createOrder ", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};
export default orderCotroller;
