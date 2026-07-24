import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Product } from './domain/product';
import { ProductService } from './service/productservice';
import { Bind } from 'primeng/bind';
import { Table, SortableColumn, SortIcon, RowToggler } from 'primeng/table';
import { ButtonDirective, Button } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { ChevronDown } from '@primeicons/angular/chevron-down';
import { ChevronRight } from '@primeicons/angular/chevron-right';
import { Rating } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { Tag } from 'primeng/tag';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-table-row-expansion-demo',
    templateUrl: './tablerowexpansiondemo.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [Bind, Table, SortableColumn, SortIcon, ButtonDirective, Ripple, RowToggler, ChevronDown, ChevronRight, Rating, FormsModule, Tag, Button, CurrencyPipe]
})
export class TableRowExpansionDemo implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProductsWithOrdersSmall().then((data) => (this.products = data));
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warn';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return undefined;
    }
  }

  getStatusSeverity(status: string) {
    switch (status) {
      case 'PENDING':
        return 'warn';
      case 'DELIVERED':
        return 'success';
      case 'CANCELLED':
        return 'danger';
      default:
        return undefined;
    }
  }
}
