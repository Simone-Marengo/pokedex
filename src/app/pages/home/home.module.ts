import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";
import { SharedModule } from 'src/app/shared/services/shared-module.module';
import { HomePageRoutingModule } from "./home-routing.module";
import { HomePage } from "./home.page";

@NgModule({
  imports: [
    IonicModule,
    HomePageRoutingModule,
    TranslateModule.forChild(),
    SharedModule
  ],
  declarations: [HomePage],
})
export class HomePageModule { }
