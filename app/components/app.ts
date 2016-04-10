import {Component} from 'angular2/core';
import {RouteConfig,
        ROUTER_DIRECTIVES,
        ROUTER_PROVIDERS} from 'angular2/router';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdRadioButton} from '@angular2-material/radio';
import {MdRadioDispatcher} from '@angular2-material/radio/radio_dispatcher';
import {MdSpinner} from '@angular2-material/progress-circle';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';

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
    MD_SIDENAV_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MdButton,
    MdCheckbox,
    MdRadioButton,
    MdSpinner,
    MD_INPUT_DIRECTIVES,
    MD_LIST_DIRECTIVES,
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
