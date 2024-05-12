import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserDetailsComponent} from "./user-details.component";
import {UserDetailsRoutingModule} from "./user-details-routing.module";
import {TableModule} from "primeng/table";
import {CardModule} from "primeng/card";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [UserDetailsComponent],
    imports: [
        CommonModule,
        UserDetailsRoutingModule,
        TableModule,
        CardModule,
        RatingModule,
        FormsModule
    ]
})
export class UserDetailsModule { }
