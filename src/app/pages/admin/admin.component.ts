import { Component } from '@angular/core';
import {LayoutService} from "../../layout/structure/service/app.layout.service";
import {ProductsListService} from "./products-list/products-list.service";
import {ResolutionService} from "../../additional-modules/resolution.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductManagementService} from "./product-management/product-management.service";
import {BaseToastService} from "../../additional-modules/base-toast/base-toast.service";
import {AdminTabInitService} from "./admin-tab-init.service";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {


    constructor(public prodsrv: ProductManagementService,public readonly itemsrv: ProductsListService, private toast: BaseToastService,
                public ressrv: ResolutionService, private router: Router,private activatedRoute: ActivatedRoute, private admininit: AdminTabInitService) {
        //this.router.navigate(['/admin-dashboard']);
    }

    getProductList(){
        this.admininit.getAllProducts();
    }

    getAllOrderDetail() {
        this.admininit.getAllOrderDetail();
    }

    getOpinions() {
        this.admininit.getOpinions();
    }

    onTabChange(event){
        switch(event.index) {
            case 0:
            case 1:
                return this.getProductList();
            case 2:
                return this.getAllOrderDetail();
            case 3:
                return this.getOpinions();
            default:
        }
    }

}
