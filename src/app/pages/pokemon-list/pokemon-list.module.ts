import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from '@ngx-translate/core';
import { TypeLabelModule } from "src/app/shared/components/type-label/type-label.module";
import { SharedModule } from 'src/app/shared/services/shared-module.module';
import { PokemonListPageRoutingModule } from "./pokemon-list-routing.module";
import { PokemonListPage } from "./pokemon-list.page";

@NgModule({
  imports: [
    IonicModule,
    PokemonListPageRoutingModule,
    TranslateModule.forChild(),
    SharedModule,
    TypeLabelModule
  ],
  declarations: [PokemonListPage],
})
export class PokemonListPageModule { }
