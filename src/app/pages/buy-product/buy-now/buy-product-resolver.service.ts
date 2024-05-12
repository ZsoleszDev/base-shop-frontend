import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {ProductDetails} from "../../admin/models/product-details";
import {map, Observable} from "rxjs";
import {ProductsListService} from "../../admin/products-list/products-list.service";
import {ImageProcessingService} from "../../admin/products-list/items-image/image-processing.service";

@Injectable({
  providedIn: 'root'
})
export class BuyProductResolverService implements Resolve<ProductDetails[]>{

  constructor(private prodsrv: ProductsListService, private imageprcsrv: ImageProcessingService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductDetails[]> | Promise<ProductDetails[]> | ProductDetails[] {
      const id = route.paramMap.get("id");
      const isSingleProductCheckout = route.paramMap.get("isSingleProductCheckout");
      return this.prodsrv.getProductDetails(isSingleProductCheckout, id)
          .pipe(
              map(
                  (x: ProductDetails[], i) => x.map((product: ProductDetails) => this.imageprcsrv.createImages(product))
              )
          )
    }
}
