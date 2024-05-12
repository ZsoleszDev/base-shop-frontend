import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BaseToastComponent} from "./base-toast.component";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {AvatarModule} from "primeng/avatar";
import {ButtonModule} from "primeng/button";



@NgModule({
    declarations: [BaseToastComponent],
    imports: [
        CommonModule,
        ToastModule,
        AvatarModule,
        ButtonModule
    ],
    exports: [
        BaseToastComponent
    ],
    providers: [MessageService]
})
export class BaseToastModule { }
