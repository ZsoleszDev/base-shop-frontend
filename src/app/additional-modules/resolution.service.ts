import {HostListener, Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResolutionService implements OnInit{

    public innerWidth = 1920;


    constructor() { }

    prodview1 = 1530;
    prodview2 = 1215;
    prodview3 = 538;

    minused = 350;

    items1 = 770;

    ngOnInit() {
        this.innerWidth = window.innerWidth;
    }


}
