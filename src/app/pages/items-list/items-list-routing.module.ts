import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsListPage } from './items-list.page';

const routes: Routes = [
  {
    path: '',
    component: ItemsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemsListPageRoutingModule {}
