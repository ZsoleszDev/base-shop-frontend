import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MobilesRoutingModule} from "./mobiles-routing.module";
import {MobilesComponent} from "./mobiles.component";
import {DataViewModule} from "primeng/dataview";
import {TagModule} from "primeng/tag";
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {TooltipModule} from "primeng/tooltip";
import {RouterLink} from "@angular/router";
import {BaseLoadingModule} from "../../../additional-modules/base-loading/base-loading.module";



@NgModule({
  declarations: [MobilesComponent],
    imports: [
        CommonModule,
        MobilesRoutingModule,
        DataViewModule,
        TagModule,
        ButtonModule,
        DropdownModule,
        TooltipModule,
        RouterLink,
        BaseLoadingModule
    ]
})
export class MobilesModule { }
