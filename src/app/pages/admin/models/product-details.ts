import {FileHandler} from "./file-handler";

export interface ProductDetails{
    productId: number;
    productName : string;
    productDescription : string;
    productDiscountedPrice : number;
    productActualPrice : number;
    productCategory: any;
    productColors: any;
    productImages: FileHandler[];
}
