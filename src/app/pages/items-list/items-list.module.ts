import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";
import { SkeletonTextModule } from "src/app/components/skeleton-text/skeleton-text.module";
import { ItemsListPageRoutingModule } from "./items-list-routing.module";
import { ItemsListPage } from "./items-list.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemsListPageRoutingModule,
    SkeletonTextModule,
    TranslateModule.forChild(),
  ],
  declarations: [ItemsListPage],
})
export class ItemsListPageModule {}
