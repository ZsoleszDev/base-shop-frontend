import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {AdminComponent} from "./admin.component";



@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: AdminComponent },
    ])],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
