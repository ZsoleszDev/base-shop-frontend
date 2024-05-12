import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderConfirmationComponent} from "./order-confirmation.component";
import {OrderConfirmationRoutingModule} from "./order-confirmation-routing.module";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";



@NgModule({
  declarations: [OrderConfirmationComponent],
    imports: [
        CommonModule,
        OrderConfirmationRoutingModule,
        ButtonModule,
        RippleModule
    ]
})
export class OrderConfirmationModule { }
