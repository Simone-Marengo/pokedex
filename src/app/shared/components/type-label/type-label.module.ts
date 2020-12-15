import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { TypeLabelComponent } from './type-label.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        TranslateModule.forChild()
    ],
    declarations: [TypeLabelComponent],
    exports: [TypeLabelComponent]
})
export class TypeLabelModule { }
