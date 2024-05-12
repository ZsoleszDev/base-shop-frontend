import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {LoginComponent} from "../login/login.component";
import {HomePageComponent} from "./home-page.component";



@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: HomePageComponent },
    ])],
    exports: [RouterModule]
})
export class HomePageRoutingModule { }
