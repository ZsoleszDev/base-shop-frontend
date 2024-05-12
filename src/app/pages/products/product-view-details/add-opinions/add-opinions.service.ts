import { Injectable } from '@angular/core';
import {ProductDetails} from "../../../admin/models/product-details";
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {OpinionDetails} from "./model/opinion-details";

@Injectable({
  providedIn: 'root'
})
export class AddOpinionsService {

    opinionVis = false;
    productName= "";

    opinion: OpinionDetails = {
        opinionId : 0,
        productId : 0,
        productName: "",
        opinion : "",
        userName : "",
        userUserName: "",
        value : 0
    }

    PATH_OF_API = environment.path_of_api;

    constructor(private httpclient: HttpClient) {
    }

    public addOpinion(opinion: FormData) {
        return this.httpclient.post<OpinionDetails>(this.PATH_OF_API+ '/addNewOpinion', opinion);
    }

    public getAllOpinion(){
        return this.httpclient.get<OpinionDetails>(this.PATH_OF_API + '/getAllOpinion');
    }

    public getMyOpinion(email: string){
        return this.httpclient.get<OpinionDetails>(this.PATH_OF_API + '/getOpinionById/'+email);
    }

    public deleteOpinion(productId: number) {
        return this.httpclient.delete(this.PATH_OF_API + "/deleteOpinion/"+productId);
    }

    public getOpinionByProd(productId: number){
        return this.httpclient.get<OpinionDetails>(this.PATH_OF_API + "/getOpinionByProd/"+productId);
    }

}
