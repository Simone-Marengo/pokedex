import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/services/shared-module.module';
import { PokemonDetailPageRoutingModule } from './pokemon-detail-routing.module';
import { PokemonDetailPage } from './pokemon-detail.page';

@NgModule({
  imports: [
    IonicModule,
    PokemonDetailPageRoutingModule,
    TranslateModule.forChild(),
    SharedModule
  ],
  declarations: [PokemonDetailPage]
})
export class PokemonDetailPageModule { }
