import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PeripheralsRoutingModule} from "./peripherals-routing.module";
import {PeripheralsComponent} from "./peripherals.component";
import {DataViewModule} from "primeng/dataview";
import {TagModule} from "primeng/tag";
import {ButtonModule} from "primeng/button";
import {TooltipModule} from "primeng/tooltip";
import {RouterLink} from "@angular/router";
import {BaseLoadingModule} from "../../../additional-modules/base-loading/base-loading.module";



@NgModule({
  declarations: [PeripheralsComponent],
    imports: [
        CommonModule,
        PeripheralsRoutingModule,
        DataViewModule,
        TagModule,
        ButtonModule,
        TooltipModule,
        RouterLink,
        BaseLoadingModule
    ]
})
export class PeripheralsModule { }
