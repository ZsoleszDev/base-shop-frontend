import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ForbiddenComponent} from "../../forbidden/forbidden.component";
import {OrderConfirmationComponent} from "./order-confirmation.component";



@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: OrderConfirmationComponent }
    ])],
    exports: [RouterModule]
})
export class OrderConfirmationRoutingModule { }
