import {Component, HostListener, OnInit} from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {ResolutionService} from "./additional-modules/resolution.service";
import {ProductsPageService} from "./pages/products/products-page.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig, public ressrv: ResolutionService, protected prodpagesrv: ProductsPageService) { }

    ngOnInit() {
        this.primengConfig.ripple = true;
        this.primengConfig.setTranslation({
            accept: 'Elfogad',
            reject: 'Mégsem',
            startsWith: "Kezdődjön ezzel",
            contains: "Tartalmazza",
            notContains: "Ne tartalmazza",
            endsWith: "Végződjön ezzel",
            equals: "Egyenlő",
            notEquals: "Nem egyenlő",
            noFilter: "Szűrő ki",
            lt: "Kevesebb, mint",
            lte: "Kevesebb vagy egyenlő",
            gt: "Nagyobb, mint",
            gte: "Nagyobb vagy egyenlő",
            is: "Tartalmaz",
            isNot: "Nem tartalmaz",
            before: "Előtte",
            after: "Utána",
            dateIs: "A dátum",
            dateIsNot: "A dátum nem",
            dateBefore: "A dátum előtt",
            dateAfter: "A dátum után",
            clear: "Törlés",
            apply: "Alkalmaz",
            matchAll: "Összeshez illeszkedjen",
            matchAny: "Bármelyikhez illeszkedjen",
            addRule: "Szabály hozzáadása",
            removeRule: "Szabály törlése",
            choose: "Választ",
            upload: "Feltölt",
            cancel: "Mégsem",
            dayNames: ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csürtötök", "Péntek", "Szombat"],
            dayNamesShort: ["Vas.", "Hét.", "Kedd", "Szer.", "Csüt.", "Pén.", "Szom."],
            dayNamesMin: ["Va","Hé","Ke","Sze","Csü","Pé","Szo"],
            monthNames: ["Január","Február","Március","Április","Május","Június","Július","Augusztus","Szeptember","Október","November","December"],
            monthNamesShort: ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún","Júl", "Aug", "Szep", "Okt", "Nov", "Dec"],
            dateFormat: "yy/mm/dd",
            firstDayOfWeek: 0,
            today: "Ma",
            weekHeader: "Hét",
            weak: "Kevés",
            medium: "Közepes",
            strong: "Erős",
            passwordPrompt: "Írja be a jelszavát",
            emptyMessage: "Nincs találat",
            emptyFilterMessage: "Nincs találat a szűrés alapján",
        });
        this.ressrv.innerWidth = window.innerWidth;
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.ressrv.innerWidth = window.innerWidth;
        if (window.innerWidth <= 834){
            this.prodpagesrv.layout = 'grid'
        }
    }

}
