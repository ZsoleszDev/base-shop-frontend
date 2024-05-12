import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductDetails} from "../../admin/models/product-details";
import {map} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {ProductsListService} from "../../admin/products-list/products-list.service";
import {ImageProcessingService} from "../../admin/products-list/items-image/image-processing.service";
import {AddOpinionsService} from "./add-opinions/add-opinions.service";
import {OpinionDetails} from "./add-opinions/model/opinion-details";
import {UserDetailsService} from "../../../authentication/services/user-details.service";
import {UserAuthService} from "../../../authentication/services/user-auth.service";
import {UserService} from "../../../authentication/services/user.service";
import {ResolutionService} from "../../../additional-modules/resolution.service";
import {BaseToastService} from "../../../additional-modules/base-toast/base-toast.service";
import {LayoutService} from "../../../layout/structure/service/app.layout.service";
import {ConfirmationService} from "primeng/api";

@Component({
  selector: 'app-product-view-details',
  templateUrl: './product-view-details.component.html',
  styleUrl: './product-view-details.component.scss'
})
export class ProductViewDetailsComponent implements OnInit{

    product: ProductDetails;
    rating: number = 5;
    colors;
    anotherProducts = [];
    opinions = [];
    opinionAllStar = 0;
    dbStar = 0;
    disableOpinion = false;
    disableActions = false;

    constructor(private activatedRoute: ActivatedRoute, private itemsrv: ProductsListService,
                private imagepsrv: ImageProcessingService, private router: Router, private laysrv: LayoutService, private confirmationService: ConfirmationService,
                public opisrv: AddOpinionsService,  public user : UserDetailsService, public usrv: UserService, public ressrv: ResolutionService, private toast: BaseToastService) {
    }

    ngOnInit() {
        this.product = this.activatedRoute.snapshot.data['product'];
        if (this.product.productActualPrice == 0){
            this.disableActions = true;
            this.disableOpinion = true;
        }
        this.opisrv.productName = this.product.productName;
        this.colors = JSON.parse(this.product.productColors);
        this.getCategoryProducts();
        this.getOpinions();
    }

    public getOpinions(){
        let allStar = 0;
        this.opisrv.getOpinionByProd(this.product.productId)
            .subscribe({
                // @ts-ignore
                next: (resp: OpinionDetails[]) => {
                    this.opinions = resp;
                        for (var i = 0; i < resp.length; i++){
                            if (resp[i].userUserName == this.user.getUD_userName()){
                                this.disableOpinion = true;
                            }
                            allStar = allStar + resp[i].value;
                            this.dbStar++;
                        }
                    this.opinionAllStar = allStar / this.dbStar;
                    },
                    error : (error: HttpErrorResponse) => {
                        console.log(error);
                    }
                }
            )
    }

    public getCategoryProducts() {
        this.itemsrv.getAllProducts()
            .pipe(
                map((x: ProductDetails[], i) => x.map((product: ProductDetails) => this.imagepsrv.createImages(product)))
            )
            .subscribe({
                    next: (resp: ProductDetails[]) => {
                        for (var i = 0; i < resp.length; i++){
                            if (resp[i].productCategory === this.product.productCategory && resp[i].productName !== this.product.productName && this.anotherProducts.length < 3){
                                this.anotherProducts.push(resp[i]);
                            }
                        }
                    },
                    error : (error: HttpErrorResponse) => {
                        console.log(error);
                    }
                }
            )
    }

    get haveAnotherProd(){
        return this.anotherProducts.length != 0;
    }

    openOpinion(){
        this.opisrv.opinionVis = true;
    }

    responsiveOptionsForPic = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    routingAnotherPlace(productId:number){
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/productView', {productId: productId}])});
    }

    buyProduct(event: Event,productId: number){
        if (this.usrv.roleMatch(['User'])){
            this.router.navigate(['/buyNow', {
                isSingleProductCheckout: true, id: productId
            }]);
        }else{
            this.confirmationService.confirm({
                target: event.target as EventTarget,
                message: 'Ahhoz, hogy tudjon vásárolni nálunk be kell jelentkeznie',
                acceptLabel: 'Bejelentkezek',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.router.navigate(['/login']);
                },
                reject: () => {
                }
            });
        }
    }

    addToCart(event: Event ,productId: number){
        if (this.usrv.roleMatch(['User'])){
            this.itemsrv.addToCart(productId).subscribe({
                next: (resp) =>{
                    this.laysrv.getCart();
                    this.toast.success('Sikeresen hozzáadta a terméket a kosarához!','');
                },
                error: (err) => {
                    this.toast.error('Sikertelen művelet!','');
                }
            })
        }else{
            this.confirmationService.confirm({
                target: event.target as EventTarget,
                message: 'Ahhoz, hogy tudjon vásárolni nálunk be kell jelentkeznie',
                acceptLabel: 'Bejelentkezek',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.router.navigate(['/login']);
                },
                reject: () => {
                }
            });
        }


    }

    protected readonly Math = Math;
}
