/** @format */

import { HttpCode } from "../libs/types/Errors";
import { Product, ProductInput, ProductInquery, ProductUpdateInput } from "../libs/types/product";
import ProductModel from "../schema/Product.model";
import { Message } from "../libs/types/Errors";
import Errors from "../libs/types/Errors";
import { shapeIntoMongooseObjectId } from "../libs/types/config";
import { T } from "../libs/types/common";
import { ProductStatus } from "../libs/enums/product.enum";
import { ObjectId } from "mongoose";
import ViewService from "./View.service";
import { ViewInput } from "../libs/types/view";
import { ViewGroup } from "../libs/enums/view.enum";

class ProductService {
  private readonly productModel;
  public viewService;
  constructor() {
    this.productModel = ProductModel;
    this.viewService = new ViewService();
  }

  /* SPA */

  public async getProducts(inquiry: ProductInquery): Promise<Product[]> {
    console.log("inquiry", inquiry);
    const match: T = { productStatus: ProductStatus.PROCESS };
    if (inquiry.productCollection) match.productCollection = inquiry.productCollection;
    if (inquiry.search) {
      match.productName = { $regex: new RegExp(inquiry.search, "i") };
    }
    const sort: T =
      inquiry.order === "productPrice"
        ? {
            [inquiry.order]: 1,
          }
        : { [inquiry.order]: -1 };

    const result = this.productModel
      .aggregate([{ $match: match }, { $sort: sort }, { $skip: (inquiry.page * 1 - 1) * inquiry.limit }, { $limit: inquiry.limit * 1 }])

      .exec();
    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
    return result;
  }

  /* SPA */
  public async getAllProducts(): Promise<Product[]> {
    const result = await this.productModel.find().exec();

    if (!result.length) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    return result;
  }

  public async createNewProduct(input: ProductInput): Promise<Product> {
    try {
      return await this.productModel.create(input);
    } catch (err) {
      console.error("Error,model:createNewPRoduct", err);

      throw new Errors(HttpCode.BAD_RQUEST, Message.CREATE_FAILED);
    }
  }

  public async getProduct(memberId: ObjectId | null, id: string): Promise<Product> {
    const productId = shapeIntoMongooseObjectId(id);
    let result = await this.productModel.findOne({ _id: productId, productStatus: ProductStatus.PROCESS }).exec();
    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    if (memberId) {
      // Check Existence

      const input: ViewInput = {
        memberId: memberId,
        viewRefId: productId,
        viewGroup: ViewGroup.PRODUCT,
      };
      const existView = await this.viewService.checkViewExistence(input);

      if (!existView) {
        // Insert view

        console.log("Planning to insert new view");
        await this.viewService.inserMemberView(input);

        // Increase counts
        result = await this.productModel.findByIdAndUpdate(productId, { $inc: { productViews: +1 } }, { new: true }).exec();
      }
    }

    return result;
  }

  public async updateChoosenProduct(id: string, input: ProductUpdateInput): Promise<Product> {
    id = shapeIntoMongooseObjectId(id);
    const result = await this.productModel.findOneAndUpdate({ _id: id }, input, { new: true }).exec();

    if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATED_FAILED);

    return result;
  }
}

export default ProductService;
