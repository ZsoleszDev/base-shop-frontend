import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageComponent} from "./home-page.component";
import {ButtonModule} from "primeng/button";
import {GalleriaModule} from "primeng/galleria";
import {HomePageRoutingModule} from "./home-page-routing.module";
import {AdvertisingBarComponent} from "./advertising-bar/advertising-bar.component";
import {TopItemsComponent} from "./top-items/top-items.component";
import {CardModule} from "primeng/card";
import {FastDeliverComponent} from "./fast-deliver/fast-deliver.component";
import {TimelineModule} from "primeng/timeline";
import {CarouselModule} from "primeng/carousel";
import {TagModule} from "primeng/tag";
import {GlobalSearchComponent} from "./global-search/global-search.component";
import {AutoCompleteModule} from "primeng/autocomplete";
import {FormsModule} from "@angular/forms";
import {IconFieldModule} from "primeng/iconfield";
import {InputIconModule} from "primeng/inputicon";



@NgModule({
  declarations: [HomePageComponent, AdvertisingBarComponent, TopItemsComponent, FastDeliverComponent,GlobalSearchComponent],
    imports: [
        CommonModule,
        HomePageRoutingModule,
        ButtonModule,
        GalleriaModule,
        CardModule,
        TimelineModule,
        CarouselModule,
        TagModule,
        AutoCompleteModule,
        FormsModule,
        IconFieldModule,
        InputIconModule
    ],
})
export class HomePageModule { }
