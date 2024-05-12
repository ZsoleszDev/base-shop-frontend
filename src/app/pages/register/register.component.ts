import { Component } from '@angular/core';
import {UserRegistrationService} from "../../authentication/services/user-registration.service";
import {FormBuilder, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../authentication/services/user.service";
import {BaseToastService} from "../../additional-modules/base-toast/base-toast.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

    sitekey = environment.recaptha;
    goodform = false;
    userFirstNameCheck = true;
    userLastNameCheck = true;
    userNameCheck = true;
    userPasswordCheck = true;
    userPassword2Check = true;
    checkCheck = true;

    loading = false;
    loadingText = 'Adatok ellenőrzése...';

    constructor(public usrv: UserService,
                private router: Router,
                public regsrv: UserRegistrationService, private toast: BaseToastService) {}


    registerForm(registerForm: NgForm) {
        let userFirstName = registerForm.value.userFirstName;
        let userLastName = registerForm.value.userLastName;
        let userName = registerForm.value.userName;
        let userPassword = registerForm.value.userPassword;
        let userPassword2 = registerForm.value.userPassword2;
        let check = registerForm.value.check;
        let recaptha = registerForm.value.recaptha;
        this.regcheck(userFirstName,userLastName,userName,userPassword,userPassword2,check,recaptha);
        if (this.goodform){
            this.loading = true;
            this.usrv.register(registerForm.value).subscribe({
                    next: (response: any) => {
                        if (response.role == null){
                            this.toast.error('Hiba!','Ezzel az E-mail címmel már regisztráltak!');
                            this.loading = false;
                        }else{
                            this.toast.success('Siker!','Sikeres regisztráció, kérjük most lépjen be kedves '+ userFirstName);
                            this.router.navigate(['/login']);
                            this.loading = false;
                        }
                    },
                    error: (error) => {
                        if (error.status == 500){
                            this.toast.error('Nem töltött ki minden mezőt!','');
                        }

                    }
                }
            );
        }
    }

    regcheck(userFirstName:string, userLastName:string,userName:string,userPassword:string,userPassword2:string,check:boolean, recaptha:any){
        //email regex
        var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
        if (userFirstName.length <= 2 ){
            this.toast.error('Hibás Keresztnév','A keresztnév túl rövid minimum 3 karakterből kell állnia');
            this.resetDirty();
            this.userFirstNameCheck = false;
        } else if (userLastName.length <= 2){
            this.toast.error('Hibás Vezetéknév','A vezetéknév túl rövid minimum 3 karakterből kell állnia');
            this.resetDirty();
            this.userLastNameCheck = false;
        } else if (userName.length <= 7 || re.test(userName) == false){
            this.toast.error('Hibás Email','Kérem töltse ki a E-mail mezőt megfelelően. (pl.: pelda.peter@gmail.com)');
            this.resetDirty();
            this.userNameCheck = false;
        } else if (userPassword.length <= 11){
            this.toast.error('Hibás Jelszó','A jelszó túl rövid minimum 12 karakteres legyen!');
            this.resetDirty();
            this.userPasswordCheck = false;
        } else if (userPassword2.length <= 11){
            this.toast.error('Hibás Jelszó ellenőrző','A jelszó ellenőrző túl rövid minimum 12 karakteres legyen!');
            this.resetDirty();
            this.userPassword2Check = false;
        }else if (userPassword2 != userPassword){
            this.toast.error('Hibás Jelszó','A két jelszó nem egyezik meg.');
            this.resetDirty();
            this.userPasswordCheck = false;
            this.userPassword2Check = false;
        }else if (recaptha.length < 5){
            this.toast.error('Hiba','Igazolja, hogy ön nem egy robot');
        } else if (!check){
            this.toast.error('Hiba','Olvassa el és fogadja el az adatkezelési tájékoztatóban foglaltakat');
            this.resetDirty();
            this.checkCheck = false;
        }else {
            this.resetDirty();
            this.goodform = true;
        }
    }

    resetDirty(){
        this.userFirstNameCheck = true;
        this.userLastNameCheck = true;
        this.userNameCheck = true;
        this.userPasswordCheck = true;
        this.userPassword2Check = true;
    }

}
