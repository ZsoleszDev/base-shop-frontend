import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ProductViewDetailsComponent} from "./product-view-details.component";




@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ProductViewDetailsComponent},
    ])],
    exports: [RouterModule]
})
export class ProductViewDetailsRoutingModule { }
