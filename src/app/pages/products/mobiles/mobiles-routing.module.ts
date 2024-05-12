import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {RegisterComponent} from "../../register/register.component";
import {MobilesComponent} from "./mobiles.component";



@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: MobilesComponent }
    ])],
  declarations: [],

})
export class MobilesRoutingModule { }
