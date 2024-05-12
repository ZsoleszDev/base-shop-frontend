import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor() { }

    alert = 'Jelszavát soha ne ossza meg másokkal';
    error = false;

    errorHandler(errorTitle: string){
        this.alert = errorTitle;
        this.error = true;
    }

}
