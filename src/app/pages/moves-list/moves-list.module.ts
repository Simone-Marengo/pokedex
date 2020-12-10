import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/services/shared-module.module';
import { MovesListPageRoutingModule } from './moves-list-routing.module';
import { MovesListPage } from './moves-list.page';

@NgModule({
  imports: [
    IonicModule,
    MovesListPageRoutingModule,
    TranslateModule.forChild(),
    SharedModule
  ],
  declarations: [MovesListPage]
})
export class MovesListPageModule { }
