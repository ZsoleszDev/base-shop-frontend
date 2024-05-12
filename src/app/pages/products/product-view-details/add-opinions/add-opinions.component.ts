import { Component } from '@angular/core';
import {AddOpinionsService} from "./add-opinions.service";
import {NgForm} from "@angular/forms";
import {BaseToastService} from "../../../../additional-modules/base-toast/base-toast.service";
import {ProductManagementService} from "../../../admin/product-management/product-management.service";
import {UserDetailsService} from "../../../../authentication/services/user-details.service";
import {ActivatedRoute} from "@angular/router";
import {OpinionDetails} from "./model/opinion-details";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'add-opinions',
  templateUrl: './add-opinions.component.html',
  styleUrl: './add-opinions.component.scss'
})
export class AddOpinionsComponent {

    constructor(public opisrv: AddOpinionsService, private toast: BaseToastService, private prodsrv: ProductManagementService, public user : UserDetailsService,private route: ActivatedRoute) {
    }

    prepareFormData(opinion: any):FormData{
        const formData = new FormData();

        formData.append(
            'opinions',
            new Blob([JSON.stringify(opinion)], {type: 'application/json'})
        )

        return formData;
    }

    AddproductForm(addOpinionForm: NgForm) {
        let productId = 0;
        this.route.params.subscribe(params => {
            productId = params['productId'];
        });
        this.opisrv.opinion.productId = productId;
        this.opisrv.opinion.userName = this.user.getUD_userFirstName();
        this.opisrv.opinion.userUserName = this.user.getUD_userName();
        this.opisrv.opinion.productName = this.opisrv.productName;
        const productFormData = this.prepareFormData(this.opisrv.opinion);
        if (this.opisrv.opinion.opinion.trim().length === 0){
            this.toast.error('Hiányzó elem!','Nem lehet üres a vélemény')
        }
        else{
            this.opisrv.addOpinion(productFormData).subscribe({
                    next: (response: any) => {
                        addOpinionForm.reset();
                        this.opisrv.opinionVis = false;
                        location.reload();
                        this.toast.success('Siker!', 'Sikeresen írt egy véleményt a termékről.');
                    },
                    error: (error) => {
                        this.toast.error('Hiba történt!','Hiba történt vélemény íráskor.');
                    }
                }
            );
        }
    }

}
