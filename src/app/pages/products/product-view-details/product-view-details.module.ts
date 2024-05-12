import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductViewDetailsComponent} from "./product-view-details.component";
import {ProductViewDetailsRoutingModule} from "./product-view-details-routing.module";
import {GalleriaModule} from "primeng/galleria";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {DividerModule} from "primeng/divider";
import {ButtonModule} from "primeng/button";
import {CarouselModule} from "primeng/carousel";
import {TagModule} from "primeng/tag";
import {FieldsetModule} from "primeng/fieldset";
import {AvatarModule} from "primeng/avatar";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {CardModule} from "primeng/card";
import {SelectButtonModule} from "primeng/selectbutton";
import {ListboxModule} from "primeng/listbox";
import {MultiSelectModule} from "primeng/multiselect";
import {DialogModule} from "primeng/dialog";
import {AddOpinionsComponent} from "./add-opinions/add-opinions.component";
import {InputTextareaModule} from "primeng/inputtextarea";
import {InputTextModule} from "primeng/inputtext";
import {ConfirmPopupModule} from "primeng/confirmpopup";



@NgModule({
  declarations: [ProductViewDetailsComponent, AddOpinionsComponent],
    imports: [
        CommonModule,
        ProductViewDetailsRoutingModule,
        GalleriaModule,
        RatingModule,
        FormsModule,
        DividerModule,
        ButtonModule,
        CarouselModule,
        TagModule,
        FieldsetModule,
        AvatarModule,
        ScrollPanelModule,
        CardModule,
        SelectButtonModule,
        ListboxModule,
        MultiSelectModule,
        DialogModule,
        InputTextareaModule,
        InputTextModule,
        ConfirmPopupModule
    ]
})
export class ProductViewDetailsModule { }
