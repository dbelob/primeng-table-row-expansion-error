import { provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withXhr, withInterceptorsFromDi } from "@angular/common/http";
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

import { ProductService } from "./app/service/productservice";
import { providePrimeNG } from "primeng/config";
import { AppComponent } from "./app/app.component";

bootstrapApplication(AppComponent, {
    providers: [
        provideHttpClient(withXhr(), withInterceptorsFromDi()),
        provideZoneChangeDetection(),
        ProductService,
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
            }
        })
    ]
})
  .catch(err => console.error(err));
