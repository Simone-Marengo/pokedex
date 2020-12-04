import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";
import { SkeletonTextModule } from "src/app/components/skeleton-text/skeleton-text.module";
import { PokemonListPageRoutingModule } from "./pokemon-list-routing.module";
import { PokemonListPage } from "./pokemon-list.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonListPageRoutingModule,
    SkeletonTextModule,
    TranslateModule.forChild(),
  ],
  declarations: [PokemonListPage],
})
export class PokemonListPageModule {}
