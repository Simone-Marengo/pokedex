import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";
import { SkeletonTextModule } from "src/app/components/skeleton-text/skeleton-text.module";
import { BerriesListPageRoutingModule } from "./berries-list-routing.module";
import { BerriesListPage } from "./berries-list.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BerriesListPageRoutingModule,
    SkeletonTextModule,
    TranslateModule.forChild(),
  ],
  declarations: [BerriesListPage],
})
export class BerriesListPageModule {}
