import {Component, OnInit} from '@angular/core';
import {ProductsListService} from "../products-list/products-list.service";
import {BaseToastService} from "../../../additional-modules/base-toast/base-toast.service";
import {AdminTabInitService} from "../admin-tab-init.service";
import {Table} from "primeng/table";
import {ConfirmationService} from "primeng/api";

@Component({
  selector: 'user-orders',
  templateUrl: './user-orders.component.html',
  styleUrl: './user-orders.component.scss'
})
export class UserOrdersComponent{

    constructor(private admininit: AdminTabInitService, private confirmationService: ConfirmationService,) {
    }

    get allOrder() {
        return this.admininit.allOrder;
    }

    confirmMarkAsDelivered(orderId, eventevent: Event) {
        this.confirmationService.confirm({
            target: eventevent.target as EventTarget,
            message: 'Biztosan ki lett szállítva az alábbi termék?',
            icon: 'pi pi-info-circle',
            acceptButtonStyleClass: 'p-button-danger p-button-sm',
            accept: () => {
                return this.admininit.markAsDelivered(orderId);
            },
            reject: () => {

            }
        });
    }




    get loading(){
        return this.admininit.loading;
    }

    clear(table: Table) {
        table.clear();
    }

    getAllOrderDetail(){
        this.admininit.getAllOrderDetail();
    }

    orderContactNumber = '';
    email = '';
    orderShippingMethod = ''
    payment = ''
    quantity = ''
    orderFullOrder = ''
    orderId = '';
    orderFullName = '';
    productName = '';
    orderAmount = '';
    orderStatus = '';
    detailsVis = false;
    showDetails(orderContactNumber,email,orderShippingMethod,payment,quantity,orderFullOrder,orderId,orderFullName,productName,orderAmount,orderStatus){
        this.orderContactNumber = orderContactNumber;
        this.email = email;
        this.orderShippingMethod = orderShippingMethod;
        this.payment = payment;
        this.quantity = quantity;
        this.orderFullOrder = orderFullOrder;
        this.orderId = orderId;
        this.orderFullName = orderFullName;
        this.productName = productName;
        this.orderAmount = orderAmount;
        this.orderStatus = orderStatus
        this.detailsVis = true;
    }

}
