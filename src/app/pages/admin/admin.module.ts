import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from "./admin.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CardModule} from "primeng/card";
import {FormsModule} from "@angular/forms";
import {InputNumberModule} from "primeng/inputnumber";
import {FileUploadModule} from "primeng/fileupload";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ProductManagementComponent} from "./product-management/product-management.component";
import {TabViewModule} from "primeng/tabview";
import {AdminRoutingModule} from "./admin-routing.module";
import {TooltipModule} from "primeng/tooltip";
import {ProductsListComponent} from "./products-list/products-list.component";
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {DialogModule} from "primeng/dialog";
import {TableModule} from "primeng/table";
import {ItemsImageComponent} from "./products-list/items-image/items-image.component";
import {GalleriaModule} from "primeng/galleria";
import {DropdownModule} from "primeng/dropdown";
import {ChipsModule} from "primeng/chips";
import {InputGroupModule} from "primeng/inputgroup";
import {EditorModule} from "primeng/editor";
import {OpinionsManageComponent} from "./opinions-manage/opinions-manage.component";
import {RatingModule} from "primeng/rating";
import {UserOrdersComponent} from "./user-orders/user-orders.component";
import {DeferModule} from "primeng/defer";
import {DataViewModule} from "primeng/dataview";



@NgModule({
  declarations: [AdminComponent, DashboardComponent, ProductManagementComponent, ProductsListComponent, ItemsImageComponent,OpinionsManageComponent,UserOrdersComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        CardModule,
        FormsModule,
        InputNumberModule,
        FileUploadModule,
        InputTextModule,
        InputTextareaModule,
        TabViewModule,
        TooltipModule,
        ConfirmPopupModule,
        DialogModule,
        TableModule,
        GalleriaModule,
        DropdownModule,
        ChipsModule,
        InputGroupModule,
        EditorModule,
        RatingModule,
        DeferModule,
        DataViewModule
    ]
})
export class AdminModule { }
