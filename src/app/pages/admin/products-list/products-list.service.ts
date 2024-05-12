import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ProductDetails} from "../models/product-details";
import {OrderDetails} from "../../buy-product/buy-now/model/order-details.model";
import {MyOrderDetails} from "../../user-details/model/order.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsListService {

    PATH_OF_API = environment.path_of_api;

    activatedIndex = 0;
    constructor(private httpclient: HttpClient) {
    }

    public getAllProducts(){
        return this.httpclient.get<ProductDetails[]>(this.PATH_OF_API + "/getAllProducts");
    }

    public deleteProduct(productId: number) {
        return this.httpclient.delete(this.PATH_OF_API + "/deleteProductDetails/"+productId);
    }

    public getProductDetails(isSingleProductCheckout, productId){
        return this.httpclient.get<ProductDetails[]>(this.PATH_OF_API+ "/getProductDetails/"+isSingleProductCheckout+"/"+productId)
    }

    public placeOrder(orderDetails: OrderDetails, isCartCheckout){
        return this.httpclient.post(this.PATH_OF_API+"/placeOrder/"+isCartCheckout, orderDetails);
    }

    public addToCart(productId: number){
        return this.httpclient.get(this.PATH_OF_API+"/addToCart/" + productId);
    }

    public getCartDetails(){
        return this.httpclient.get(this.PATH_OF_API+"/getCartDetails");
    }

    public deleteCartItem(cartId){
        return this.httpclient.delete(this.PATH_OF_API+"/deleteCartItem/"+cartId);
    }

    public getMyOrders(): Observable<MyOrderDetails[]> {
        return this.httpclient.get<MyOrderDetails[]>(this.PATH_OF_API+"/getOrderDetails");
    }

    public getAllOrders(): Observable<MyOrderDetails[]> {
        return this.httpclient.get<MyOrderDetails[]>(this.PATH_OF_API+"/getAllOrderDetails");
    }

    public markAsDelivered(orderId) {
        return this.httpclient.get(this.PATH_OF_API+"/markOrderAsDelivered/"+orderId)
    }

}
