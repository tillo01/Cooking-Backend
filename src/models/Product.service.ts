/** @format */

import { HttpCode } from "../libs/types/Errors";
import { Product, ProductInput, ProductUpdateInput } from "../libs/types/product";
import ProductModel from "../schema/Product.model";
import { Message } from "../libs/types/Errors";
import Errors from "../libs/types/Errors";
import { shapeIntoMongooseObjectId } from "../libs/types/config";

class ProductService {
  private readonly productModel;
  constructor() {
    this.productModel = ProductModel;
  }

  /* SPA */

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

  public async updateChoosenProduct(id: string, input: ProductUpdateInput): Promise<Product> {
    id = shapeIntoMongooseObjectId(id);
    const result = await this.productModel.findOneAndUpdate({ _id: id }, input, { new: true }).exec();

    if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATED_FAILED);

    return result;
  }
}

export default ProductService;
