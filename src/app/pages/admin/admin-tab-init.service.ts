import { Injectable } from '@angular/core';
import {map} from "rxjs";
import {ProductDetails} from "./models/product-details";
import {HttpErrorResponse} from "@angular/common/http";
import {ProductsListService} from "./products-list/products-list.service";
import {ImageProcessingService} from "./products-list/items-image/image-processing.service";
import {BaseToastService} from "../../additional-modules/base-toast/base-toast.service";
import {OpinionDetails} from "../products/product-view-details/add-opinions/model/opinion-details";
import {AddOpinionsService} from "../products/product-view-details/add-opinions/add-opinions.service";
import {ProductManagementService} from "./product-management/product-management.service";

@Injectable({
  providedIn: 'root'
})
export class AdminTabInitService {

    loading = false;
    products = [];
    allOrder = [];
    opinions = [];

  constructor(private itemsrv: ProductsListService, private imagepsrv: ImageProcessingService,private toast: BaseToastService,public opisrv: AddOpinionsService, private prodmansrv: ProductManagementService) { }

    /* List product list */
    public getAllProducts() {
        this.loading = true;
        this.itemsrv.getAllProducts()
            .pipe(
                map((x: ProductDetails[], i) => x.map((product: ProductDetails) => this.imagepsrv.createImages(product)))
            )
            .subscribe({
                    next: (resp: ProductDetails[]) => {
                        this.products = resp;
                        this.loading = false;
                    },
                    error : (error: HttpErrorResponse) => {
                        console.log(error);
                    }
                }
            )
    }

    /* User order */
    public getAllOrderDetail() {
        this.loading = true;
        this.itemsrv.getAllOrders().subscribe({
            next: (res) => {
                console.log("RESP: " + JSON.stringify(res));
                this.allOrder = res;
                this.loading = false;
            },
            error: (err) => {

            }
        })
    }

    public markAsDelivered(orderId){
        this.itemsrv.markAsDelivered(orderId).subscribe({
            next: (res) => {
                this.getAllOrderDetail();
                this.toast.success('Sikeresen módosította az alábbi rendelést','');
            },
            error: (err) => {
                this.toast.error('Sikertelen módosítás','');
            }
        })
    }

    /* Opinion List */
    public getOpinions(){
        this.loading = true;
        this.opisrv.getAllOpinion()
            .subscribe({
                    // @ts-ignore
                    next: (resp: OpinionDetails[]) => {
                        this.opinions = resp
                        this.loading = false;
                    },
                    error : (error: HttpErrorResponse) => {
                        console.log(error);
                    }
                }
            )
    }

    public deleteProduct(productId: number, productName: string, userName: string) {
        this.loading = true;
        this.opisrv.deleteOpinion(productId).subscribe(
            {
                next: (resp) => {
                    this.toast.success('Törlés','Sikeresen törölted  '+userName+' véleményét a(z) \"' + productName + '\" ről/ról');
                    this.getOpinions();
                    this.loading = false;
                },
                error: (error:HttpErrorResponse) => {
                    this.toast.error('Törlés','Sikertelen (lásd console)');
                    console.log(error);
                    this.loading = false;
                }
            }
        )
    }

}
