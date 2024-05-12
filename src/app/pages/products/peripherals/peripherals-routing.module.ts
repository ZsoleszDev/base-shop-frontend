import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {PeripheralsComponent} from "./peripherals.component";



@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: PeripheralsComponent }
    ])],
    declarations: [],
})
export class PeripheralsRoutingModule { }
