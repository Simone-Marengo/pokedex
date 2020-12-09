import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailPage } from './pokemon-detail.page';


const routes: Routes = [
  {
    path: '',
    component: PokemonDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonDetailPageRoutingModule {}
