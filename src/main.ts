import { provideZoneChangeDetection, importProvidersFrom } from "@angular/core";
import 'zone.js';
import { platformBrowser, BrowserModule, bootstrapApplication } from '@angular/platform-browser';


import { ProductService } from "./app/service/productservice";
import { provideHttpClient, withXhr, withInterceptorsFromDi } from "@angular/common/http";
import { providePrimeNG } from "primeng/config";
import { definePreset } from "@primeuix/themes";
import { ChevronDown } from "@primeicons/angular/chevron-down";
import { ChevronRight } from "@primeicons/angular/chevron-right";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { RatingModule } from "primeng/rating";
import { RippleModule } from "primeng/ripple";
import { TableModule } from "primeng/table";
import { Tag } from "primeng/tag";
import { AppComponent } from "./app/app.component";


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, ChevronDown, ChevronRight, FormsModule, ButtonModule, RatingModule, RippleModule, TableModule, Tag),
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
  .catch(err => console.error(err));
