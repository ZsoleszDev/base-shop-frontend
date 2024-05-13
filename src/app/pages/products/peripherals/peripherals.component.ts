import {Component, OnInit} from '@angular/core';
import {ProductDetails} from "../../admin/models/product-details";
import {ProductsListService} from "../../admin/products-list/products-list.service";
import {ImageProcessingService} from "../../admin/products-list/items-image/image-processing.service";
import {map} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {ProductsPageService} from "../products-page.service";
import {ResolutionService} from "../../../additional-modules/resolution.service";
import {ConfirmationService} from "primeng/api";
import {UserService} from "../../../authentication/services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-peripherals',
  templateUrl: './peripherals.component.html',
  styleUrl: './peripherals.component.scss'
})
export class PeripheralsComponent implements OnInit{

    peripherals: ProductDetails[] = [];
    founds = 0;
    loading = true;
    loadingText = 'Perifériáink betöltése...';
    constructor(private itemsrv: ProductsListService,private imagepsrv: ImageProcessingService, public prodpagesrv: ProductsPageService, public ressrv: ResolutionService,
                private confirmationService: ConfirmationService,public usrv: UserService, private router: Router) {

    }
    get layout(){
        return this.prodpagesrv.layout
    }

    ngOnInit(): void {
        this.getAllProducts();
    }

    public getAllProducts() {
        this.itemsrv.getAllProducts()
            .pipe(
                map((x: ProductDetails[], i) => x.map((product: ProductDetails) => this.imagepsrv.createImages(product)))
            )
            .subscribe({
                    next: (resp: ProductDetails[]) => {
                        if (resp.length == 0){
                            this.loadingText = 'Sajnos nincs perifériánk a raktáron, kérem nézzen vissza később';
                        }else{
                            for (var i = 0; i < resp.length; i++){
                                if (resp[i].productCategory === 'Perifériák'){
                                    this.peripherals.push(resp[i]);
                                    this.founds++;
                                }
                                this.loading = false;
                            }
                        }
                    },
                    error : (error: HttpErrorResponse) => {
                        console.log(error);
                    }
                }
            )
    }

    addToCart(event,productId){
        if (this.usrv.roleMatch(['User'])){
            this.prodpagesrv.addToCart(productId);
        }else{
            this.confirmationService.confirm({
                target: event.target as EventTarget,
                message: 'Ahhoz, hogy tudjon vásárolni nálunk be kell jelentkeznie',
                acceptLabel: 'Bejelentkezek',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.router.navigate(['/login']);
                },
                reject: () => {

                }
            });
        }
    }

    get actionsDis(){
        return this.usrv.roleMatch(['Admin']);
    }

    buyProduct(event,productId){
        if (this.usrv.roleMatch(['User'])){
            this.prodpagesrv.buyProduct(productId);
        }else{
            this.confirmationService.confirm({
                target: event.target as EventTarget,
                message: 'Ahhoz, hogy tudjon vásárolni nálunk be kell jelentkeznie',
                acceptLabel: 'Bejelentkezek',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.router.navigate(['/login']);
                },
                reject: () => {

                }
            });
        }
    }


}
