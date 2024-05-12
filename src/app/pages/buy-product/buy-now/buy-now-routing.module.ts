import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {BuyNowComponent} from "./buy-now.component";



@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: BuyNowComponent},
    ])],
    exports: [RouterModule]
})
export class BuyNowRoutingModule { }
