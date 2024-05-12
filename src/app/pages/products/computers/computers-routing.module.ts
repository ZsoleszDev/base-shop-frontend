import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {ComputersComponent} from "./computers.component";



@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ComputersComponent }
    ])],
    declarations: [],
})
export class ComputersRoutingModule { }
