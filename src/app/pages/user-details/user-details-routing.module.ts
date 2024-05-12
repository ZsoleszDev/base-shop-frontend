import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {UserDetailsComponent} from "./user-details.component";



@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: UserDetailsComponent }
    ])],
    exports: [RouterModule]
})
export class UserDetailsRoutingModule { }
