import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login.component";
import {FormsModule} from "@angular/forms";
import {PasswordModule} from "primeng/password";
import {CheckboxModule} from "primeng/checkbox";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {RouterLink} from "@angular/router";
import {InputTextModule} from "primeng/inputtext";
import {LoginRoutingModule} from "./login-routing.module";



@NgModule({
  declarations: [LoginComponent],
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        PasswordModule,
        CheckboxModule,
        ButtonModule,
        RippleModule,
        RouterLink,
        InputTextModule
    ]
})
export class LoginModule { }
