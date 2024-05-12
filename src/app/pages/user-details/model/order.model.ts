import {ProductDetails} from "../../admin/models/product-details";

export interface MyOrderDetails {
    orderId: number;
    orderFullName: string;
    orderFullOrder: string;
    orderContactNumber: string;
    orderShippingMethod: string;
    orderStatus: string;
    orderAmount:number;
    product: ProductDetails;
    user: any;
}
