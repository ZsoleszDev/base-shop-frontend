import {Component, Input, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'items-image',
  templateUrl: './items-image.component.html',
  styleUrl: './items-image.component.scss'
})
export class ItemsImageComponent{

    @Input() images:any;

    constructor() {
    }

    get pImages(){
        return this.images;
    }

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

}
