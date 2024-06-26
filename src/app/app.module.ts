import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { AppComponent } from './app.component';
import { TableRowExpansionDemo } from './tablerowexpansiondemo';
import { ProductService } from "./service/productservice";

@NgModule({ declarations: [
        AppComponent,
        TableRowExpansionDemo
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FormsModule,
        ButtonModule,
        RatingModule,
        RippleModule,
        TableModule], providers: [ProductService, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {
}
