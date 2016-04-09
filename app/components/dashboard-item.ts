import {Component, Input} from 'angular2/core';
import {Router} from 'angular2/router';
import {ProductService} from '../services/product';
import {Product} from '../models/product';

@Component({
  selector: 'dashboard-item',
  templateUrl: 'app/templates/components/dashboard-item.html',
  styleUrls: ['app/styles/components/dashboard-item.css']
})
export class DashboardItemComponent {
  @Input() product: Product;

  constructor(
    private _router: Router,
    private _productService: ProductService) {

  }

  gotoDetail(product: Product) {
    let link = ['ProductDetail', { id: product.id }]
    this._router.navigate(link);
  }
}
