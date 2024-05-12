import {Component, OnInit} from '@angular/core';
import {ProductDetails} from "../models/product-details";
import {MessageService} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductManagementService} from "./product-management.service";
import {DomSanitizer} from "@angular/platform-browser";
import {FileHandler} from "../models/file-handler";
import {NgForm} from "@angular/forms";
import {BaseToastService} from "../../../additional-modules/base-toast/base-toast.service";
import {map} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'product-management',
  templateUrl: './product-management.component.html',
  styleUrl: './product-management.component.scss'
})
export class ProductManagementComponent{


    selectedCategory?;
    uploadedFiles: any[] = [];
    loading = false;

    desCount = 0;

    countDesLetter(event: any){
        this.desCount = event.textValue.length;
    }


    constructor(private router: Router, protected prodsrv: ProductManagementService, private sanitizer: DomSanitizer
    , private toast: BaseToastService, private activatedRoute: ActivatedRoute) {
    }

    editProd(){
        this.prodsrv.hideForm = false;
        this.prodsrv.product = this.activatedRoute.snapshot.data['product'];
        this.selectedCategory = this.prodsrv.product.productCategory? {name: this.prodsrv.product.productCategory}: '';
        if (this.prodsrv.product && this.prodsrv.product.productId){
            this.toast.info('Termék frissítése','Ezen az oldalon most a betöltött terméket tudja frissíteni. Ha új terméket szeretne hozzáadni akkor kattintson a lenti \"Új termék hozzáadása\" gombra',20000)
        }
        this.router.navigate(['/admin-dashboard']);
    }

    addNewProd(){
        this.router.navigate(['/admin-dashboard']);
        location.reload();
        this.prodsrv.hideForm = false;
    }

    onUpload(event) {
        if (event.target.files[0].size > 999999){
            this.toast.error('Hiba','A kép mérete túl nagy, kérem válasszon másikat.')
        }else{
            if (event.target.files){
                const file = event.target.files[0];
                const filehandler: FileHandler = {
                    file: file,
                    url: this.sanitizer.bypassSecurityTrustUrl(
                        window.URL.createObjectURL(file)
                    )
                }

                this.prodsrv.product.productImages.push(filehandler);
            }
        }
    }

    allClear(){
        this.prodNameCheck = true;
        this.prodActCheck = true;
        this.prodDisCheck = true;
        this.prodCatCheck = true;
        this.prodImageCheck = true;
        this.prodDesCheck = true;
    }

    prodNameCheck = true;
    prodActCheck = true;
    prodDisCheck = true;
    prodCatCheck = true;
    prodImageCheck = true;
    prodDesCheck = true;

    AddproductForm(addProductForm: NgForm) {
        const productFormData = this.prepareFormData(this.prodsrv.product);
        if (this.prodsrv.product.productImages.length === 0){
            this.toast.error('Hiányzó elem!','Nem töltött fel a termékhez képet!');
            this.allClear();
            this.prodImageCheck = false;
        } else if (this.prodsrv.product.productName.length <= 5){
            this.toast.error('Hibás Termék név','A termék névnek legalább 6 karakterből kell hogy álljon!');
            this.allClear();
            this.prodNameCheck = false;
        }else if (this.prodsrv.product.productActualPrice <= 1000){
            this.toast.error('Hibás Aktuális ár','A termék aktuális árának többnek kell lennie mint 1000Ft!');
            this.allClear();
            this.prodActCheck = false;
        }else if (this.prodsrv.product.productDiscountedPrice <= 1000){
            this.toast.error('Hibás Kedvezményes ár','A termék kedvezményes árának többnek kell lennie mint 1000Ft!');
            this.allClear();
            this.prodDisCheck = false;
        }else if (this.prodsrv.product.productDiscountedPrice > this.prodsrv.product.productActualPrice){
            this.toast.error('Hibás Aktuális ár','A termék aktuális árának többnek kell lennie mint a kedvezményes árnak');
            this.allClear();
            this.prodActCheck = false;
            this.prodDisCheck = false;
        }else if (this.prodsrv.product.productCategory.length === 0){
            this.toast.error('Hibás Kategória','Nem választott ki a terméknek kategóriát');
            this.allClear();
            this.prodCatCheck = false;
        }
        else{
            this.loading = true;
            this.allClear();
            this.prodsrv.addProduct(productFormData).subscribe({
                next: (response: any) => {
                    this.loading = false;
                    addProductForm.reset();
                    this.uploadedFiles = [];
                    this.toast.success('Siker!',this.prodsrv.newItem? 'Sikeresen feltöltötte a terméket.':'Sikeresen frissítetted a terméket.');
                    this.prodsrv.product.productImages = [];
                },
            error: (error) => {
                this.loading = false;
                this.toast.error('Hiba történt!','Hiba történt a termék feltöltése közben.');
            }
            }
            );
        }
    }

    resetFormDatas(addProductForm: NgForm){
        addProductForm.reset();
        this.uploadedFiles = [];
        this.prodsrv.product.productImages = [];
        this.toast.info('Adatok törlése','A megadott termék adatai még nem törlődtek az adatbázisból, előbb menjen rá a termék frissítésére.', 10000)
    }

    backToNew(addProductForm: NgForm){
        addProductForm.reset();
        this.uploadedFiles = [];
        this.prodsrv.product.productImages = [];
        this.router.navigate(['/admin-dashboard']);
        this.prodsrv.newItem  = true;
        location.reload();
        this.toast.info('Adjon hozzá új terméket!','Mostmár tud új terméket hozzáadni a weboldalhoz');
    }

    prepareFormData(product: any):FormData{
        const formData = new FormData();

        formData.append(
            'product',
            new Blob([JSON.stringify(product)], {type: 'application/json'})
        )

        for(var i = 0; i < product.productImages.length; i++){
            formData.append(
                'imageFile',
                product.productImages[i].file,
                product.productImages[i].file.name,
            )
        }
        return formData;
    }

    removeImages(i: number){
        this.prodsrv.product.productImages.splice(i, 1);
    }

    prod_catergories = [
        { name: 'Telefonok'},
        { name: 'Számítógépek'},
        { name: 'Perifériák'},
    ];

    category(category){
        if (category.value.name){
            this.prodsrv.product.productCategory = category.value.name;
        }
    }

}
