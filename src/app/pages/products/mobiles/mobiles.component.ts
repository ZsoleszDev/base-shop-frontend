import {Component, OnInit} from '@angular/core';
import {ProductDetails} from "../../admin/models/product-details";
import {map} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {ProductsListService} from "../../admin/products-list/products-list.service";
import {ImageProcessingService} from "../../admin/products-list/items-image/image-processing.service";
import {ConfirmationService, SelectItem} from "primeng/api";
import {ProductsPageService} from "../products-page.service";
import {ResolutionService} from "../../../additional-modules/resolution.service";
import {UserService} from "../../../authentication/services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrl: './mobiles.component.scss'
})
export class MobilesComponent implements OnInit{

    mobiles: ProductDetails[] = [];
    founds = 0;
    loading = true;
    loadingText = 'Telefonjaink betöltése...';
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
                            this.loadingText = 'Sajnos nincs telefonunk a raktáron, kérem nézzen vissza később :(';
                        }else{
                            for (var i = 0; i < resp.length; i++){
                                if (resp[i].productCategory === 'Telefonok'){
                                    this.mobiles.push(resp[i]);
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
