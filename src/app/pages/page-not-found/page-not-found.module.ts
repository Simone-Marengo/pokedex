import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/services/shared-module.module';
import { PageNotFoundPageRoutingModule } from './page-not-found-routing.module';
import { PageNotFoundPage } from './page-not-found.page';

@NgModule({
  imports: [
    IonicModule,
    PageNotFoundPageRoutingModule,
    TranslateModule.forChild(),
    SharedModule
  ],
  declarations: [PageNotFoundPage]
})
export class PageNotFoundPageModule {}
