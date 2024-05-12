import { Injectable } from '@angular/core';
import {UserDetailsService} from "./user-details.service";

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

    recievedJWT: any
    decodedJWT : any;

    constructor(private user : UserDetailsService) {}

    // @ts-ignore
    public getRoles(): string {
        try {
            if (this.user.getUD_userRole()){
                return <string>this.user.getUD_userRole();
            }else{
                return "ROLE_User";
            }
        } catch (error) {
            console.log("ERROR" + error);
        }
    }

    public setToken(jwtToken: string,rememberme: boolean) {
        if (rememberme){
            localStorage.setItem('jwtToken', jwtToken);
        }else{
            sessionStorage.setItem('jwtToken', jwtToken)
        }

    }

    public getToken() {
        if (localStorage.getItem('jwtToken') == undefined || localStorage.getItem('jwtToken') == null){
            return sessionStorage.getItem('jwtToken');
        }else{
            return localStorage.getItem('jwtToken');
        }
    }

    workWithToken(token : any,rememberme: boolean){
        this.recievedJWT = token;
        this.decodedJWT = this.user.decodeToken(token);
        this.setToken(token,rememberme);
    }

    public clear() {
        localStorage.clear();
        sessionStorage.clear();
    }

    public isLoggedIn() {
        return this.getToken();
    }


}
