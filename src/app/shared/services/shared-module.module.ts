import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkeletonTextModule } from '../components/skeleton-text/skeleton-text.module';

@NgModule({
    imports: [
        CommonModule,
        SkeletonTextModule,
        FormsModule
    ],
    declarations: [],
    exports: [
        CommonModule,
        SkeletonTextModule,
        FormsModule
    ]
})
export class SharedModule { }