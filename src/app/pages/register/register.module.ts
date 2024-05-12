import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterComponent} from "./register.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PasswordModule} from "primeng/password";
import {RouterLink} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {RegisterRoutingModule} from "./register-routing.module";
import {NgxCaptchaModule} from "ngx-captcha";
import {InputSwitchModule} from "primeng/inputswitch";
import {BaseLoadingModule} from "../../additional-modules/base-loading/base-loading.module";



@NgModule({
  declarations: [RegisterComponent],
    imports: [
        CommonModule,
        RegisterRoutingModule,
        FormsModule,
        PasswordModule,
        RouterLink,
        ButtonModule,
        RippleModule,
        InputTextModule,
        ReactiveFormsModule,
        NgxCaptchaModule,
        InputSwitchModule,
        BaseLoadingModule
    ]
})
export class RegisterModule { }
