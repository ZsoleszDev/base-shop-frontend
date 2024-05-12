import { Component } from '@angular/core';
import {AddOpinionsService} from "../../products/product-view-details/add-opinions/add-opinions.service";
import {OpinionDetails} from "../../products/product-view-details/add-opinions/model/opinion-details";
import {HttpErrorResponse} from "@angular/common/http";
import {Table} from "primeng/table";
import {ConfirmationService} from "primeng/api";
import {BaseToastService} from "../../../additional-modules/base-toast/base-toast.service";
import {AdminTabInitService} from "../admin-tab-init.service";

@Component({
  selector: 'opinions-manage',
  templateUrl: './opinions-manage.component.html',
  styleUrl: './opinions-manage.component.scss'
})
export class OpinionsManageComponent {


    constructor(private confirmationService: ConfirmationService,private admininit: AdminTabInitService) {
    }

    refresh(){
        this.admininit.getOpinions();
    }


    clear(table: Table) {
        table.clear();
    }

    confirmDelete(event: Event, productId: number, productName: string, userName: string) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Biztos szeretné törölni,  '+userName+' véleményét a(z) \"' + productName + '\" ről/ról' ,
            icon: 'pi pi-info-circle',
            acceptButtonStyleClass: 'p-button-danger p-button-sm',
            accept: () => {
                this.admininit.deleteProduct(productId, productName, userName);
            },
            reject: () => {
            }
        });
    }

    get opinions(){
        return this.admininit.opinions;
    }

    get loading(){
        return this.admininit.loading;
    }



}
