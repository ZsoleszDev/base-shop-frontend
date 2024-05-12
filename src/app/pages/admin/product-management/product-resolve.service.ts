import { Injectable } from '@angular/core';
import {ProductDetails} from "../models/product-details";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {map, Observable, of} from "rxjs";
import {FileHandler} from "../models/file-handler";
import {ProductManagementService} from "./product-management.service";
import {ImageProcessingService} from "../products-list/items-image/image-processing.service";

@Injectable({
  providedIn: 'root'
})
export class ProductResolveService implements Resolve<ProductDetails>{

  constructor(private prodsrv: ProductManagementService, private imageprocsrv: ImageProcessingService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductDetails> {
      const id = route.paramMap.get("productId");

      if (id){
        return this.prodsrv.getProductDetailsById(id)
            .pipe(
                map(p => this.imageprocsrv.createImages(p))
            )
      }else{
          return of (this.getProductDetails());
      }

    }

    getProductDetails(){
      return {
          productId: null,
          productName : "",
          productDescription : "",
          productDiscountedPrice : 0,
          productActualPrice : 0,
          productCategory: "",
          productColors: null,
          productImages: []
      }
    }

}
