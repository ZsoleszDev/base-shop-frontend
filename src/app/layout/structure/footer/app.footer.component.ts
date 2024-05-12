import { Component } from '@angular/core';
import { LayoutService } from "../service/app.layout.service";

@Component({
    selector: 'app-footer',
    templateUrl: './app.footer.component.html'
})
export class AppFooterComponent {
    year = 0;
    constructor(public layoutService: LayoutService) {
        const d = new Date();
        this.year = d.getFullYear();
    }
}
