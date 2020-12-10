import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { SkeletonTextModule } from '../components/skeleton-text/skeleton-text.module';

export function HttpLoaderFactory(http: HttpClient) {
    return new MultiTranslateHttpLoader(http, [
        { prefix: "../../../assets/i18n/toasts/", suffix: ".json" },
        { prefix: "../../../assets/i18n/generics/", suffix: ".json" }
    ]);
};

@NgModule({
    imports: [
        CommonModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (HttpLoaderFactory),
                deps: [HttpClient],
            },
        }),
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