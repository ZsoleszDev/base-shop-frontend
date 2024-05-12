import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LicensesComponent} from "./licenses.component";
import {DataHandlingComponent} from "./data-handling/data-handling.component";
import {LegalComponent} from "./legal/legal.component";
import {LicensesRoutingModule} from "./licenses-routing.module";



@NgModule({
  declarations: [LicensesComponent,DataHandlingComponent,LegalComponent],
  imports: [
    CommonModule,
      LicensesRoutingModule
  ]
})
export class LicensesModule { }
