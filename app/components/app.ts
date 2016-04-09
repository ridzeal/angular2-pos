import {Component} from 'angular2/core';
import {RouteConfig,
        ROUTER_DIRECTIVES,
        ROUTER_PROVIDERS} from 'angular2/router';
import {ProductsComponent} from './products';
import {DashboardComponent} from './dashboard';
import {ProductDetailComponent} from './product-detail';
import {ProductService} from './../services/product';
import {LoggerService} from './../services/logger'

@Component({
  selector: 'app',
  templateUrl: 'app/templates/components/app.html',
  styleUrls: ['app/styles/components/app.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    ProductService,
    LoggerService
  ]
})

@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },{
    path: '/products',
    name: 'Products',
    component: ProductsComponent
  },{
    path: '/detail/:id',
    name: 'ProductDetail',
    component: ProductDetailComponent
  }
])

export class AppComponent {
  title = "ngPOS";
}
