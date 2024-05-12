import { Injectable } from '@angular/core';
import {ProductDetails} from "../models/product-details";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ProductManagementService {

    product: ProductDetails = {
        productId: null,
        productName: "",
        productDescription: "",
        productDiscountedPrice: 0,
        productActualPrice: 0,
        productCategory: "",
        productColors: null,
        productImages: []
    }

    hideForm = false;

    newItem = true;

    PATH_OF_API = environment.path_of_api;

    constructor(private httpclient: HttpClient) {
    }

    public addProduct(product: FormData) {
        return this.httpclient.post<ProductDetails>(this.PATH_OF_API+ '/addNewProduct', product);
    }

    public getProductDetailsById(productId){
        return this.httpclient.get<ProductDetails>(this.PATH_OF_API + '/getProductDetailsById/' +productId);
    }

}
