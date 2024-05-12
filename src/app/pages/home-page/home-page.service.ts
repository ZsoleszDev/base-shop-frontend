import { Injectable } from '@angular/core';
import {map} from "rxjs";
import {ProductDetails} from "../admin/models/product-details";
import {HttpErrorResponse} from "@angular/common/http";
import {ProductsListService} from "../admin/products-list/products-list.service";
import {ImageProcessingService} from "../admin/products-list/items-image/image-processing.service";

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

    products = [];
    searchItems = [];

  constructor(private itemsrv: ProductsListService,private imagepsrv: ImageProcessingService) { }

    public getAllProducts() {
        this.itemsrv.getAllProducts()
            .pipe(
                map((x: ProductDetails[], i) => x.map((product: ProductDetails) => this.imagepsrv.createImages(product)))
            )
            .subscribe({
                    next: (resp: ProductDetails[]) => {
                        this.products = [];
                        resp.reverse();
                        if (resp.length == 3){
                            for (var i = 0; i < 3; i++){
                                this.products.push(resp[i]);
                            }
                        }
                    },
                    error : (error: HttpErrorResponse) => {
                        console.log(error);
                    }
                }
            )
    }

    public getSearched() {
        this.itemsrv.getAllProducts()
            .pipe(
                map((x: ProductDetails[], i) => x.map((product: ProductDetails) => this.imagepsrv.createImages(product)))
            )
            .subscribe({
                    next: (resp: ProductDetails[]) => {
                        this.searchItems = resp;
                    },
                    error : (error: HttpErrorResponse) => {
                        console.log(error);
                    }
                }
            )
    }

}
