import { Component, OnInit } from '@angular/core';
import { Product } from './domain/product';
import { ProductService } from './service/productservice';

@Component({
    selector: 'app-table-row-expansion-demo',
    templateUrl: './tablerowexpansiondemo.html',
    standalone: false
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
