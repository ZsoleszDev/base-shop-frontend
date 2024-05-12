import {OrderQuantity} from "./order-quantity.model";

export interface OrderDetails{
    fullName: string;
    fullAddress: string;
    contactNumber: string;
    orderShippingMethod: string;
    payment: string
    orderProductQuantitiesList: OrderQuantity[];
}
