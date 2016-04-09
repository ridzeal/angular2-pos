import {Component, Input, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Product} from './../models/product';
import {ProductService} from '../services/product';

@Component({
  inputs: ['product'],
  selector: 'product-detail',
  templateUrl: 'app/templates/components/product-detail.html',
  styleUrls: ['app/styles/components/product-detail.css']
})

export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private _productService: ProductService,
    private _routeParams: RouteParams) {

  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._productService.getProduct(id)
      .then(product => this.product = product)
  }

  goBack() {
    window.history.back();
  }
}
