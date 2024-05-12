import {Component, OnInit} from '@angular/core';
import {ProductsListService} from "../admin/products-list/products-list.service";
import {UserDetailsService} from "../../authentication/services/user-details.service";
import {OpinionDetails} from "../products/product-view-details/add-opinions/model/opinion-details";
import {HttpErrorResponse} from "@angular/common/http";
import {AddOpinionsService} from "../products/product-view-details/add-opinions/add-opinions.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit{

    myOrders = [];
    opinions = []
    ordersNull = false;
    opinionsNull = false;

    constructor(private itemsrv: ProductsListService, private user: UserDetailsService, private opisrv: AddOpinionsService) {
    }

    getOrderDetails(){
        this.itemsrv.getMyOrders().subscribe({
            next: (resp) => {
                this.myOrders = resp;
                this.ordersNull = resp.length == 0;
            },
            error: (err) => {
                console.error(err);
            }
        })
    }

    ngOnInit(): void {
        this.getOrderDetails();
        this.getOpinions(this.email);
    }

    get firstname(){
        return this.user.getUD_userFirstName()
    }

    get email(){
        return this.user.getUD_userName();
    }

    public getOpinions(email: string){
        this.opisrv.getMyOpinion(email)
            .subscribe({
                    // @ts-ignore
                    next: (resp: OpinionDetails[]) => {
                            this.opinions = resp;
                            this.opinionsNull = resp.length == 0;
                    },
                    error : (error: HttpErrorResponse) => {
                        console.log(error);
                    }
                }
            )
    }

}
