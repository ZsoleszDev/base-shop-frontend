import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserAuthService} from "./user-auth.service";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

    PATH_OF_API = environment.path_of_api;

    requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
    constructor(
        private httpclient: HttpClient,
        private userAuthService: UserAuthService
    ) {}

    public login(loginData: any) {
        return this.httpclient.post(this.PATH_OF_API + '/authenticate', loginData, {
            headers: this.requestHeader,
        });
    }

    public register(registerData: any) {
        return this.httpclient.post(this.PATH_OF_API + '/registerNewUser', registerData, {
            headers: this.requestHeader,
        });
    }

    public forUser() {
        return this.httpclient.get(this.PATH_OF_API + '/forUser', {
            responseType: 'text',
        });
    }

    public forAdmin() {
        return this.httpclient.get(this.PATH_OF_API + '/forAdmin', {
            responseType: 'text',
        });
    }

    public roleMatch(allowedRoles: string | any[]): boolean {
        let isMatch = false;
        const userRoles: any = this.userAuthService.getRoles();
        if (userRoles == allowedRoles){
            isMatch = true;
            return isMatch;
        } else {
            return isMatch;
        }
    }
}
