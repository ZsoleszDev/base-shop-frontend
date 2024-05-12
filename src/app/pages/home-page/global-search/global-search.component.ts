import { Component } from '@angular/core';
import {AutoCompleteCompleteEvent} from "primeng/autocomplete";
import {HomePageService} from "../home-page.service";
import {Router} from "@angular/router";

@Component({
  selector: 'global-search',
  templateUrl: './global-search.component.html',
  styleUrl: './global-search.component.scss'
})
export class GlobalSearchComponent {

    selectedCountry: any;

    filteredCountries: any[] | undefined;

    constructor(private homesrv: HomePageService, private router: Router) {
        this.homesrv.getSearched();
    }

    get searchItems() {
        return this.homesrv.searchItems;
    }

    filterCountry(event: AutoCompleteCompleteEvent) {
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < (this.searchItems as any[]).length; i++) {
            let country = (this.searchItems as any[])[i];
            if (country.productName.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }

    clickOpponent(event){
        this.router.navigate(['/productView', {productId: event.value.productId}]);
    }

}
