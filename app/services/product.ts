import {Injectable} from 'angular2/core';
import {Product} from './../models/product';
import {PRODUCTS} from './../data/product';
import {LoggerService} from './logger';

@Injectable()
export class ProductService {
  constructor(private _logger: LoggerService) {}

  getProducts() {
    return Promise.resolve(PRODUCTS);
  }

  getProduct(id: number) {
    return Promise.resolve(PRODUCTS).then(
      products => {
        return products.filter(product => {
          if(product.id === id) {
            this._logger.log(`Fetch ${product.name}`);
            return true;
          }
        })[0]
      }
    );
  }
}
