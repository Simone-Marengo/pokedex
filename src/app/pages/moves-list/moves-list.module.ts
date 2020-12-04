import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SkeletonTextModule } from 'src/app/components/skeleton-text/skeleton-text.module';
import { MovesListPageRoutingModule } from './moves-list-routing.module';
import { MovesListPage } from './moves-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovesListPageRoutingModule,
    SkeletonTextModule,
    TranslateModule.forChild()
  ],
  declarations: [MovesListPage]
})
export class MovesListPageModule { }
