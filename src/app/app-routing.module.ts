import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'pokemon-list',
    loadChildren: () => import('./pages/pokemon-list/pokemon-list.module').then(m => m.PokemonListPageModule)
  },
  {
    path: 'berries-list',
    loadChildren: () => import('./pages/berries-list/berries-list.module').then( m => m.BerriesListPageModule)
  },
  {
    path: 'items-list',
    loadChildren: () => import('./pages/items-list/items-list.module').then( m => m.ItemsListPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
