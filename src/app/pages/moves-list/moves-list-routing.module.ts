import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovesListPage } from './moves-list.page';

const routes: Routes = [
  {
    path: '',
    component: MovesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovesListPageRoutingModule { }
