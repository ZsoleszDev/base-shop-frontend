import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";
@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

    // Getters
    getUD_userName(){
        // @ts-ignore
        if (localStorage.getItem('jwtToken') != undefined){
            // @ts-ignore
            return this.decodeToken(localStorage.getItem('jwtToken')).userDetails.userName;
        }else if (sessionStorage.getItem('jwtToken') != undefined){
            // @ts-ignore
            return this.decodeToken(sessionStorage.getItem('jwtToken')).userDetails.userName;
        }else{
            return "Vásárló";
        }
    }

    getUD_userFirstName(){
        if (localStorage.getItem('jwtToken') != undefined){
            // @ts-ignore
            return this.decodeToken(localStorage.getItem('jwtToken')).userDetails.userFirstName;
        }else if (sessionStorage.getItem('jwtToken') != undefined){
            // @ts-ignore
            return this.decodeToken(sessionStorage.getItem('jwtToken')).userDetails.userFirstName;
        }else{
            return "Vásárló";
        }
    }

    getUD_userLastName(){
        if (localStorage.getItem('jwtToken') != undefined){
            // @ts-ignore
            return this.decodeToken(localStorage.getItem('jwtToken')).userDetails.userLastName;
        }else if (sessionStorage.getItem('jwtToken') != undefined){
            // @ts-ignore
            return this.decodeToken(sessionStorage.getItem('jwtToken')).userDetails.userLastName;
        }else{
            return "Új";
        }
    }

    getUD_userRole(){
        if (localStorage.getItem('jwtToken') != undefined){
            // @ts-ignore
            return this.decodeToken(localStorage.getItem('jwtToken')).userDetails.role[0].roleName;
        }else if (sessionStorage.getItem('jwtToken') != undefined){
            // @ts-ignore
            return this.decodeToken(sessionStorage.getItem('jwtToken')).userDetails.role[0].roleName;
        }else{
            return "New";
        }
    }

    // JWT Token decoder
    decodeToken(token: any){
        try {
            return jwt_decode(token);
        } catch(Error) {
            return null;
        }
    }

}
