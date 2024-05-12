import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {ForbiddenComponent} from "./forbidden.component";



@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ForbiddenComponent }
    ])],
    exports: [RouterModule]
})
export class ForbiddenRoutingModule { }
