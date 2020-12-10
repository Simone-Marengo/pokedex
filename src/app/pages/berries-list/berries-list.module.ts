import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";
import { SharedModule } from 'src/app/shared/services/shared-module.module';
import { BerriesListPageRoutingModule } from "./berries-list-routing.module";
import { BerriesListPage } from "./berries-list.page";

@NgModule({
  imports: [
    IonicModule,
    BerriesListPageRoutingModule,
    TranslateModule.forChild(),
    SharedModule
  ],
  declarations: [BerriesListPage],
})
export class BerriesListPageModule {}
