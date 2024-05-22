import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ProductDetails} from "../../admin/models/product-details";
import {OrderDetails} from "./model/order-details.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsListService} from "../../admin/products-list/products-list.service";
import {UserDetailsService} from "../../../authentication/services/user-details.service";
import {BaseToastService} from "../../../additional-modules/base-toast/base-toast.service";
import {ResolutionService} from "../../../additional-modules/resolution.service";


@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrl: './buy-now.component.scss'
})
export class BuyNowComponent implements OnInit{

    productDetails: ProductDetails[] = [];
    isSingleProductCheckout:string ='';
    postalCode = '';
    city = '';
    publicAreaName = '';
    orderButtonDis = true;

    postalBad = false;
    cityBad = false;
    publicBad = false;
    phoneBad = false;
    loading = false;

    orderDetails: OrderDetails = {
        fullName: '',
        fullAddress: '',
        contactNumber: '',
        orderShippingMethod: '',
        payment: '',
        orderProductQuantitiesList: []
    }

    constructor(private activatedRoute: ActivatedRoute,
                private prodsrv: ProductsListService,
                private router: Router,
                public ressrv: ResolutionService,
                protected readonly user : UserDetailsService,
                private toast: BaseToastService) {
    }


    ngOnInit() {
        this.productDetails = this.activatedRoute.snapshot.data['productDetails'];
        this.isSingleProductCheckout = this.activatedRoute.snapshot.paramMap.get("isSingleProductCheckout");

        this.productDetails.forEach(
            x => this.orderDetails.orderProductQuantitiesList.push(
                {productId: x.productId, quantity: 1}
            )
        );
        if (this.productDetails.length != 0){
            this.orderButtonDis = false;
        }
        this.orderDetails.orderShippingMethod = 'Házhozszállítás';
        this.orderDetails.payment = 'Utánvét (fizetés a futárnál)';
    }

    placeOrder(orderForm: NgForm){
        this.loading = true;
        if (this.formChecker(orderForm)){
            this.orderDetails.fullName = this.user.getUD_userLastName() + ' ' + this.user.getUD_userFirstName();
            this.orderDetails.fullAddress = this.postalCode + ' ' + this.city + ' ' + this.publicAreaName;
            this.prodsrv.placeOrder(this.orderDetails,this.isSingleProductCheckout).subscribe({
                next: (resp) =>{
                    orderForm.reset();
                    this.loading = false;
                    this.router.navigate(['/orderConfirm']);
                },
                error: (err) => {
                    this.loading = false;
                    console.log(err);
                }
            })
        }else{
            this.loading = false;
        }
    }

    formChecker(orderForm){
        this.setAllBack();
        if (orderForm.value.iranyitoszam.toString().length < 4){
            this.toast.error('Hiba!','Az irányítószámnak 4 számjegyűnek kell lennie.');
            this.postalBad = true;
            this.loading = false;
            return false
        } else if (orderForm.value.varos.length < 2) {
            this.toast.error('Hiba!','Kérem adja meg a várost.');
            this.cityBad = true;
            this.loading = false;
            return false;
        }else if (orderForm.value.kozt.length < 5){
            this.toast.error('Hiba!','Kérem adja meg a Közterület nevét és típusát. pl.:( Kossuth utca 12. )');
            this.publicBad = true;
            this.loading = false;
            return false;
        }else if (orderForm.value.contactNumber.length < 11){
            this.toast.error('Hiba!','Kérem adja meg a telefonszámát. pl.:( 06701234567 )');
            this.phoneBad = true;
            this.loading = false;
            return false;
        }else{
            return true;
        }
    }

    setAllBack(){
        this.postalBad = false;
        this.cityBad = false;
        this.publicBad = false;
        this.phoneBad = false;
        this.loading = false;
    }

    getQuantityForProduct(productId) {
        const filteredProduct = this.orderDetails.orderProductQuantitiesList.filter(
            (productQuantity) => productQuantity.productId === productId
        );

        return filteredProduct[0].quantity
    }

    getCalcTotal(productId: number,productDisc){
        const filteredProduct = this.orderDetails.orderProductQuantitiesList.filter(
            (productQuantity) => productQuantity.productId === productId
        );

        return filteredProduct[0].quantity * productDisc;
    };

    onQuantityChanged(quantityNum, prodId){
        this.orderDetails.orderProductQuantitiesList.filter(
            (productQuantity) => productQuantity.productId === prodId
        )[0].quantity = quantityNum;
    }

    getCalculatedGrandTotal() {
        let grandTotal = 0;

        this.orderDetails.orderProductQuantitiesList.forEach(
            (productQuantity) => {
                const price = this.productDetails.filter(product => product.productId === productQuantity.productId)[0].productDiscountedPrice;
                grandTotal = grandTotal + price * productQuantity.quantity;
            }
        )
        return grandTotal;

    }

    protected readonly JSON = JSON;
}
