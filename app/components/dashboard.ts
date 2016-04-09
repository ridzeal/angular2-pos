import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Product} from './../models/product';
import {ProductService} from './../services/product';
import {DashboardItemComponent} from './dashboard-item';

@Component({
  selector: 'dashboard',
  templateUrl: 'app/templates/components/dashboard.html',
  styleUrls: ['app/styles/components/dashboard.css'],
  directives: [DashboardItemComponent]
})

export class DashboardComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private _router: Router,
    private _productService: ProductService) {

  }

  ngOnInit() {
    this._productService.getProducts()
      .then(products => this.products = products.slice(0,5))
  }

  gotoDetail(product: Product) {
    let link = ['ProductDetail', { id: product.id }]
    this._router.navigate(link);
  }
}
