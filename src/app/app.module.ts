import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { ChevronDown } from '@primeicons/angular/chevron-down';
import { ChevronRight } from '@primeicons/angular/chevron-right';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { Tag } from 'primeng/tag';
import { AppComponent } from './app.component';
import { TableRowExpansionDemo } from './tablerowexpansiondemo';
import { ProductService } from './service/productservice';
import { definePreset } from '@primeuix/themes';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

@NgModule({
    declarations: [AppComponent],
    bootstrap: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ChevronDown,
        ChevronRight,
        FormsModule,
        ButtonModule,
        RatingModule,
        RippleModule,
        TableModule,
        Tag,
        TableRowExpansionDemo
    ],
    providers: [
        ProductService,
        provideHttpClient(withXhr(), withInterceptorsFromDi()),
        providePrimeNG({
            theme: {
                preset: definePreset(Aura, {
                    semantic: {
                        primary: {
                            50: "{blue.50}",
                            100: "{blue.100}",
                            200: "{blue.200}",
                            300: "{blue.300}",
                            400: "{blue.400}",
                            500: "{blue.500}",
                            600: "{blue.600}",
                            700: "{blue.700}",
                            800: "{blue.800}",
                            900: "{blue.900}",
                            950: "{blue.950}"
                        }
                    }
                })
            },
        })
    ]
})
export class AppModule {
}
