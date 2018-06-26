import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Product} from './product';

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

  getProductsList(products) {
    this._http.get('/products/list').subscribe(
      (res) => {
        console.log('SUCCESS in getting products: ', res.json());
        products(res.json());
      },
      (err) => {
        console.log('ERROR in getting products: ', err);
      }
    );
  }

  newProduct(product, callback) {
    this._http.post('/products/new', {product: product} ).subscribe(
      (res) => {
        console.log('SUCCESS creatting products: ', res.json());
        callback(res.json());
      },
      (err) => {
        console.log('ERROR creatting products: ', err);
      }
    );
  }

  deleteProduct(id, callback) {
    this._http.delete('/delete/' + id).subscribe(
      (res) => {
        console.log('SUCCESS in deleting product: ', res.json());
        callback(res.json());
      },
      (err) => {
        console.log('ERROR in deleting product: ', err);
      }
    );
  }

  editProduct(product, callback) {
    this._http.put('/products/edit', product).subscribe(
      (res) => {
        console.log('SUCCESS updating Product: ', res.json());
        callback(res.json());
      },
      (err) => {
        console.log('ERROR updating Product: ', err);
      }
    );
  }

  getProductById(id, callback) {
    this._http.get('/products/' + id ).subscribe(
      (res) => {
        console.log('SUCCESS getting ProductByID: ', res.json());
        callback(res.json());
      },
      (err) => {
        console.log('ERROR getting ProductByID: ', err);
      }
    );
  }

  getLast(callback) {
    this._http.get('/products/nId').subscribe(
      (res) => {
        console.log('SUCCESS getting last product: ', res.json());
        callback(res.json());
      },
      (err) => {
        console.log('ERROR getting ProductByID: ', err);
      }
    );
  }


}