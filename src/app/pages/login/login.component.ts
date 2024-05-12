import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {BaseToastService} from "../../additional-modules/base-toast/base-toast.service";
import {Router} from "@angular/router";
import {UserService} from "../../authentication/services/user.service";
import {UserAuthService} from "../../authentication/services/user-auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

    constructor(public uAutsrv: UserAuthService,
                public usrv: UserService,
                private router: Router,
                private toast: BaseToastService) {
        this.logoutWhenNavigate();
    }

    logoutWhenNavigate(){
        if (localStorage.getItem('jwtToken') != undefined || sessionStorage.getItem('jwtToken') != undefined){
            this.toast.success('Sikeres kijelentkezés','');
            localStorage.removeItem('jwtToken');
            sessionStorage.removeItem('jwtToken');
        }
    }

    emailCheck = true;
    passwordCheck = true;

    login(loginForm: NgForm) {
        if (loginForm.value.userName.length < 1){
            this.toast.error('Kérem adja meg az e-mail címét!','');
            this.emailCheck = false;
            this.passwordCheck = true;
        }else if (loginForm.value.userPassword.length < 1){
            this.toast.error('Kérem adja meg a jelszavát!','');
            this.emailCheck = true;
            this.passwordCheck = false;
        }
        this.usrv.login(loginForm.value).subscribe({
            next: (response: any) => {
                this.uAutsrv.workWithToken(response.jwtToken,loginForm.value.rememberme);
                const role = this.uAutsrv.getRoles();
                if (loginForm.value.rememberme){
                    this.toast.success('Sikeres belépés!','A rendszer 5 órán keresztül megjegyzi az adatait');
                }
                if (role == 'Admin') {
                    this.router.navigate(['/admin-dashboard']);
                } else{
                    this.router.navigate(['/']);
                }
            },
            error: (error) => {
                if (error.status === 401 || error.status === 403) {
                    this.toast.error('Hibás bejelentkezés','Nem létezik ilyen felhasználó',10000)
                }else{
                    this.toast.warn('Kezeletlen hiba történt','Kérjük ellenőrizze le adatait!',10000)
                }
            }
        }
        );
    }




}
