import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BerriesListPage } from './berries-list.page';

const routes: Routes = [
  {
    path: '',
    component: BerriesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BerriesListPageRoutingModule {}
