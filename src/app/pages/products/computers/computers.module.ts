import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComputersComponent} from "./computers.component";
import {ComputersRoutingModule} from "./computers-routing.module";
import {ButtonModule} from "primeng/button";
import {DataViewModule} from "primeng/dataview";
import {SharedModule} from "primeng/api";
import {TagModule} from "primeng/tag";
import {TooltipModule} from "primeng/tooltip";
import {RouterLink} from "@angular/router";
import {BaseLoadingModule} from "../../../additional-modules/base-loading/base-loading.module";
import {ConfirmPopupModule} from "primeng/confirmpopup";



@NgModule({
  declarations: [ComputersComponent],
    imports: [
        CommonModule,
        ComputersRoutingModule,
        ButtonModule,
        DataViewModule,
        SharedModule,
        TagModule,
        TooltipModule,
        RouterLink,
        BaseLoadingModule,
        ConfirmPopupModule
    ]
})
export class ComputersModule { }
