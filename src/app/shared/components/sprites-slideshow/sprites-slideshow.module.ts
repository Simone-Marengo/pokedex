import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SpritesSlideshowComponent } from './sprites-slideshow.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        TranslateModule.forChild()
    ],
    declarations: [SpritesSlideshowComponent],
    exports: [SpritesSlideshowComponent]
})
export class SpritesSlideshowModule { }
