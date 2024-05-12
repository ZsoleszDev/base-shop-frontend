import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {ProductsListService} from "../admin/products-list/products-list.service";
import {BaseToastService} from "../../additional-modules/base-toast/base-toast.service";

@Injectable({
  providedIn: 'root'
})
export class ProductsPageService {

    layout: string = 'list';

  constructor(private router: Router, private itemsrv: ProductsListService, private toast: BaseToastService) { }

    showProductDetails(productId){
      this.router.navigate(['/productView', {productId: productId}]);
    }

    buyProduct(productId: number){
        this.router.navigate(['/buyNow', {
            isSingleProductCheckout: true, id: productId
        }]);
    }

    addToCart(productId: number){
        this.itemsrv.addToCart(productId).subscribe({
            next: (resp) =>{
                this.toast.success('Sikeresen hozzáadta a terméket a kosarához!','')
            },
            error: (err) => {
                this.toast.error('Sikertelen művelet!','');
            }
        })
    }

}
