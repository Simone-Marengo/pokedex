import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SkeletonTextModule } from '../skeleton-text/skeleton-text.module';
import { AbilityDetailComponent } from './ability-detail.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SkeletonTextModule
    ],
    declarations: [AbilityDetailComponent],
    exports: [AbilityDetailComponent]
})
export class AbilityDetailModule { }
