import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "../service/app.layout.service";
import {UserAuthService} from "../../../authentication/services/user-auth.service";
import {UserService} from "../../../authentication/services/user.service";
import {ProductsListService} from "../../../pages/admin/products-list/products-list.service";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService, private uAutsrv: UserAuthService, protected readonly usrv: UserService, private itemsrv: ProductsListService) {
        this.layoutService.getCart();
    }

    public isLoggedIn() {
        return this.uAutsrv.isLoggedIn();
    }

    get cartNum(){
        return this.layoutService.cartNum;
    }


}
