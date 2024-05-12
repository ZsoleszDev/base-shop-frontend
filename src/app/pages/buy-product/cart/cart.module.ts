import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartComponent} from "./cart.component";
import {CartRoutingModule} from "./cart-routing.module";
import {DataViewModule} from "primeng/dataview";
import {DropdownModule} from "primeng/dropdown";
import {SharedModule} from "primeng/api";
import {TagModule} from "primeng/tag";
import {FormsModule} from "@angular/forms";
import {CardModule} from "primeng/card";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {ButtonModule} from "primeng/button";



@NgModule({
  declarations: [CartComponent],
    imports: [
        CommonModule,
        CartRoutingModule,
        DataViewModule,
        DropdownModule,
        SharedModule,
        TagModule,
        FormsModule,
        CardModule,
        ScrollPanelModule,
        ButtonModule
    ]
})
export class CartModule { }
