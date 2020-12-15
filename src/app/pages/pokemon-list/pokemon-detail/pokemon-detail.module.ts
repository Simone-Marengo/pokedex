import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from '@ngx-translate/core';
import { AbilityDetailModule } from "src/app/shared/components/ability-detail/abilty-detail.module";
import { SpritesSlideshowModule } from 'src/app/shared/components/sprites-slideshow/sprites-slideshow.module';
import { TypeLabelModule } from 'src/app/shared/components/type-label/type-label.module';
import { SharedModule } from 'src/app/shared/services/shared-module.module';
import { PokemonDetailPageRoutingModule } from './pokemon-detail-routing.module';
import { PokemonDetailPage } from './pokemon-detail.page';

@NgModule({
  imports: [
    IonicModule,
    PokemonDetailPageRoutingModule,
    TranslateModule.forChild(),
    SharedModule,
    SpritesSlideshowModule,
    TypeLabelModule,
    AbilityDetailModule
  ],
  declarations: [PokemonDetailPage]
})
export class PokemonDetailPageModule { }
