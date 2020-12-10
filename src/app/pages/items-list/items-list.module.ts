import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";
import { SharedModule } from 'src/app/shared/services/shared-module.module';
import { ItemsListPageRoutingModule } from "./items-list-routing.module";
import { ItemsListPage } from "./items-list.page";

@NgModule({
  imports: [
    IonicModule,
    ItemsListPageRoutingModule,
    TranslateModule.forChild(),
    SharedModule
  ],
  declarations: [ItemsListPage],
})
export class ItemsListPageModule { }
