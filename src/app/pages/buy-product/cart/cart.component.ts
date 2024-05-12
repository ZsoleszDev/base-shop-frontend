import {Component, OnInit} from '@angular/core';
import {ProductsListService} from "../../admin/products-list/products-list.service";
import {ImageProcessingService} from "../../admin/products-list/items-image/image-processing.service";
import {map} from "rxjs";
import {ProductDetails} from "../../admin/models/product-details";
import {Router} from "@angular/router";
import {BaseToastService} from "../../../additional-modules/base-toast/base-toast.service";
import {LayoutService} from "../../../layout/structure/service/app.layout.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{

    cartDetails = [];
    cartDetailsNull = false;
    loading = false;

    constructor(private itemsrv: ProductsListService,private laysrv: LayoutService, private router: Router, private toast: BaseToastService) {
    }

    getCartDetails(){
        this.loading = true;
        this.itemsrv.getCartDetails()
            .subscribe({
            next: (resp: any) =>{
                this.cartDetails = resp;
                this.loading = false;
                if(resp.length == 0){
                    this.cartDetailsNull = true;
                }
            },
            error: (err) => {
                this.loading = false;
            }
        })
    }

    ngOnInit(): void {
        this.getCartDetails();
    }

    checkout(){
        this.router.navigate(['/buyNow', {
            isSingleProductCheckout: false, id: 0
        }]);
    }

    delete(cartId){
        this.itemsrv.deleteCartItem(cartId).subscribe({
            next: (resp) => {
                this.laysrv.getCart();
                this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                    this.router.navigate(['/cart']);
                });
                this.toast.success('Sikeresen törölt 1 elemet a kosarából!','');
            },
            error: (err) => {

            }
        })
    }

}
