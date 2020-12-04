import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SkeletonTextComponent } from './skeleton-text.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule
    ],
    declarations: [SkeletonTextComponent],
    exports: [SkeletonTextComponent]
})
export class SkeletonTextModule { }
