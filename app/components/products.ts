import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {ProductDetailComponent} from './../components/product-detail';
import {ProductService} from './../services/product';
import {Product} from './../models/product';

@Component({
  selector: 'products',
  templateUrl: 'app/templates/components/product.html',
  directives: [ProductDetailComponent],
  providers: [ProductService],
  styleUrls: ['app/styles/components/product.css']
})

export class ProductsComponent implements OnInit {
  title = "AngPOS";
  products: Product[];
  selectedProduct: Product;

  constructor(
    private _router: Router,
    private _productService: ProductService) {

  }

  ngOnInit() {
    this.getProducts();
  }

  trackByProduct(
    index: number,
    product: Product) {
      return product.id;
  }

  getProducts() {
    this._productService.getProducts().then(products => this.products = products);
  }

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }

  gotoDetail(product: Product) {
    let link = ['ProductDetail', { id: product.id }]
    this._router.navigate(link);
  }
}
