import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BaseLoadingComponent} from "./base-loading.component";



@NgModule({
    declarations: [BaseLoadingComponent],
    exports: [
        BaseLoadingComponent
    ],
    imports: [
        CommonModule
    ]
})
export class BaseLoadingModule { }
