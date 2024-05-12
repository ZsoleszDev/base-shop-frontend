import {Component, OnInit} from '@angular/core';
import {ProductDetails} from "../../admin/models/product-details";
import {ProductsListService} from "../../admin/products-list/products-list.service";
import {ImageProcessingService} from "../../admin/products-list/items-image/image-processing.service";
import {map} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {HomePageService} from "../home-page.service";

@Component({
  selector: 'base-top-items',
  templateUrl: './top-items.component.html',
  styleUrl: './top-items.component.scss'
})
export class TopItemsComponent implements OnInit{

    constructor(private router: Router, private homesrv: HomePageService) {
    }

    ngOnInit(): void {
        this.homesrv.getAllProducts();
    }

    get products() {
        return this.homesrv.products;
    }

    routing(productId:number){
        this.router.navigate(['/productView', {productId: productId}]);
    }

    get haveItems(){
        return this.products.length >= 3 ;
    }

}
