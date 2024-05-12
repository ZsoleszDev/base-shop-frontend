import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ForbiddenComponent} from "./forbidden.component";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {RouterLink} from "@angular/router";
import {ForbiddenRoutingModule} from "./forbidden-routing.module";

@NgModule({
  declarations: [ForbiddenComponent],
    imports: [
        CommonModule,
        ForbiddenRoutingModule,
        ButtonModule,
        RippleModule,
        RouterLink
    ]
})
export class ForbiddenModule { }
