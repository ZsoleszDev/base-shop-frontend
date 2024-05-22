import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProductDetails} from "../models/product-details";
import {BaseToastService} from "../../../additional-modules/base-toast/base-toast.service";
import {ConfirmationService} from "primeng/api";
import {ImageProcessingService} from "./items-image/image-processing.service";
import {ActivatedRoute, Event, Router} from "@angular/router";
import {map} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {Table} from "primeng/table";
import {ProductsListService} from "./products-list.service";
import {ProductManagementService} from "../product-management/product-management.service";
import {AdminTabInitService} from "../admin-tab-init.service";

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent{

    imageDisplayer = false;

    constructor(private itemsrv: ProductsListService,
                private toast: BaseToastService,
                private confirmationService: ConfirmationService,
                private imagepsrv: ImageProcessingService,
                private router: Router,
                protected prodsrv: ProductManagementService,
                private admininit: AdminTabInitService
    ) {
    }

    get products(){
        return this.admininit.products;
    }

    get loading(){
        return this.admininit.loading;
    }

    clear(table: Table) {
        table.clear();
    }

    getAllProducts(){
        this.admininit.getAllProducts();
    }

    confirmDelete(event: Event, productId: number, productName: string) {
        this.confirmationService.confirm({
            //@ts-ignore
            target: event.target as EventTarget,
            message: 'Biztos szeretné törölni, a(z) '+productName+' nevű terméket?' ,
            icon: 'pi pi-info-circle',
            acceptButtonStyleClass: 'p-button-danger p-button-sm',
            accept: () => {
                this.deleteProduct(productId, productName);
            },
            reject: () => {
            }
        });
    }

    deleteProduct(productId: number, productName: string) {
        this.admininit.loading = true;
        this.itemsrv.deleteProduct(productId).subscribe(
            {
                next: (resp) => {
                    this.toast.success('Törlés','Sikeresen törölted a(z) '+productName+' nevű terméket');
                    this.admininit.getAllProducts();
                    this.admininit.loading = false;
                },
                error: (error:HttpErrorResponse) => {
                    this.toast.error('Törlés','Sikertelen (lásd console)');
                    console.log(error);
                    this.admininit.loading = false;
                }
            }
        )
    }

    images?:any;

    showImages(element: ProductDetails){
        this.images = element.productImages
        this.imageDisplayer = true;
    }

    editProductDetails(prodId){
        this.router.navigate(['/admin-dashboard', {productId: prodId}]);
        this.itemsrv.activatedIndex = 0;
        this.prodsrv.hideForm = true;
        this.prodsrv.newItem = false;
    }
}
