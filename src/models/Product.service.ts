
import { HttpCode } from "../libs/types/Errors";
import { Product, ProductInput } from "../libs/types/product";
import ProductModel from "../schema/Product.model";
import { Message } from "../libs/types/Errors";
import Errors from "../libs/types/Errors";



class ProductService  {
    private readonly productModel;
    constructor(){
        this.productModel = ProductModel;
    }

    /* SPA */
    
    
     /* SPA */


     public async createNewProduct(input:ProductInput):Promise<Product>{
        
try {
    return await this.productModel.create(input);
} catch (err) {
    console.error("Error,model:createNewPRoduct",err);
    
    throw new Errors(HttpCode.BAD_RQUEST,Message.CREATE_FAILED);
}
     }
    
}


export default ProductService;