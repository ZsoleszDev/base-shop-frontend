import { NgModule } from '@angular/core';
import {CommonModule, NgForOf} from '@angular/common';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {DataViewModule} from "primeng/dataview";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {PaginatorModule} from "primeng/paginator";
import {SharedModule} from "primeng/api";
import {TagModule} from "primeng/tag";
import {BuyNowComponent} from "./buy-now.component";
import {BuyNowRoutingModule} from "./buy-now-routing.module";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {RadioButtonModule} from "primeng/radiobutton";



@NgModule({
  declarations: [BuyNowComponent],
    imports: [
        CommonModule,
        ButtonModule,
        CardModule,
        DataViewModule,
        DropdownModule,
        FormsModule,
        InputTextModule,
        NgForOf,
        PaginatorModule,
        SharedModule,
        TagModule,
        BuyNowRoutingModule,
        ScrollPanelModule,
        RadioButtonModule
    ]
})
export class BuyNowModule { }
