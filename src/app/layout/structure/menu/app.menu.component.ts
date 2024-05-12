import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            { label: '',
                items: [
                    {label: 'Kezdőlap', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Termékek',
                items: [
                    { label: 'Telefonok', icon: 'pi pi-fw pi-mobile', routerLink: ['mobiles'] },
                    { label: 'Számítógépek', icon: 'pi pi-fw pi-desktop', routerLink: ['computers'] },
                    { label: 'Perifériák', icon: 'pi pi-fw pi-print', routerLink: ['peripherals'] }
                ]
            },
        ];
    }
}
