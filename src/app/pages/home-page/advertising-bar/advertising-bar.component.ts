import { Component } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'base-advertising-bar',
  templateUrl: './advertising-bar.component.html',
  styleUrl: './advertising-bar.component.scss'
})
export class AdvertisingBarComponent {

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

    screenHeight: number;
    screenWidth: number;

    desktop_images = true;

    mobile_pics= [
        {
            itemImageSrc: '/assets/layout/advertising/rog_lap_mob.jpg',
            thumbnailImageSrc: '',
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
        {
            itemImageSrc: '/assets/layout/advertising/log_sup_mob.jpg',
            thumbnailImageSrc: '',
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
        {
            itemImageSrc: '/assets/layout/advertising/sam_gal_adv_mob.jpg',
            thumbnailImageSrc: '',
            alt: 'Description for Image 1',
            title: 'Title 1'
        }
    ];

    desktop_pics = [
        {
            itemImageSrc: '/assets/layout/advertising/rog_lap.jpg',
            thumbnailImageSrc: '',
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
        {
            itemImageSrc: '/assets/layout/advertising/log_sup.jpg',
            thumbnailImageSrc: '',
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
        {
            itemImageSrc: '/assets/layout/advertising/sam_gal_adv.jpg',
            thumbnailImageSrc: '',
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
    ]

    constructor() {
        this.getScreenSize();
    }

    @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        if (window.innerWidth < 638){
            this.desktop_images = false;
        }else{
            this.desktop_images = true;
        }
    }

}
