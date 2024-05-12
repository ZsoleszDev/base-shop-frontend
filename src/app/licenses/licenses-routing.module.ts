import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {AdminComponent} from "../pages/admin/admin.component";
import {LicensesComponent} from "./licenses.component";
import {DataHandlingComponent} from "./data-handling/data-handling.component";
import {ImpressumComponent} from "./impressum/impressum.component";
import {LegalComponent} from "./legal/legal.component";



@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: LicensesComponent },
        { path: 'adatkezeles', component: DataHandlingComponent },
        { path: 'jogi-nyilatkozat', component: LegalComponent },
        { path: 'impresszum', component: ImpressumComponent },
    ])],
    exports: [RouterModule]
})
export class LicensesRoutingModule { }
