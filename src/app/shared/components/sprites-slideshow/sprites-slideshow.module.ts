import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SpritesSlideshowComponent } from './sprites-slideshow.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: [SpritesSlideshowComponent],
    exports: [SpritesSlideshowComponent]
})
export class SpritesSlideshowModule { }
