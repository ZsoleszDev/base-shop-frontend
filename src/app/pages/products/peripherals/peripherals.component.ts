import {Component, OnInit} from '@angular/core';
import {ProductDetails} from "../../admin/models/product-details";
import {ProductsListService} from "../../admin/products-list/products-list.service";
import {ImageProcessingService} from "../../admin/products-list/items-image/image-processing.service";
import {map} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {ProductsPageService} from "../products-page.service";
import {ResolutionService} from "../../../additional-modules/resolution.service";

@Component({
  selector: 'app-peripherals',
  templateUrl: './peripherals.component.html',
  styleUrl: './peripherals.component.scss'
})
export class PeripheralsComponent implements OnInit{

    peripherals: ProductDetails[] = [];
    founds = 0;
    loading = true;
    constructor(private itemsrv: ProductsListService,private imagepsrv: ImageProcessingService, public prodpagesrv: ProductsPageService, public ressrv: ResolutionService) {

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
                        for (var i = 0; i < resp.length; i++){
                            if (resp[i].productCategory === 'Perifériák'){
                                this.peripherals.push(resp[i]);
                                this.founds++;
                            }
                            this.loading = false;
                        }

                    },
                    error : (error: HttpErrorResponse) => {
                        console.log(error);
                    }
                }
            )
    }

}
