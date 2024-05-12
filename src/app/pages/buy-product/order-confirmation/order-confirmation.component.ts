import { Component } from '@angular/core';
import {LayoutService} from "../../../layout/structure/service/app.layout.service";

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrl: './order-confirmation.component.scss'
})
export class OrderConfirmationComponent {

    constructor(private laysrv: LayoutService) {
        this.laysrv.getCart();
    }

}
