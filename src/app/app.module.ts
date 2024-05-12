import { NgModule } from '@angular/core';
import {PathLocationStrategy, LocationStrategy, NgIf} from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/structure/app.layout.module';
import {BaseToastModule} from "./additional-modules/base-toast/base-toast.module";
import {ConfirmationService} from "primeng/api";
import {UserService} from "./authentication/services/user.service";
import {AuthInterceptor} from "./authentication/guards/auth.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthGuard} from "./authentication/guards/auth.guard";

@NgModule({
    declarations: [AppComponent],
    imports: [AppRoutingModule, AppLayoutModule, BaseToastModule, NgIf],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy, },
        ConfirmationService,AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass:AuthInterceptor,
            multi:true
        },
        UserService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
