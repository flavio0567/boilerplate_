import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products;


  constructor(private _productService: ProductService, private _router: Router) { }

  ngOnInit() {
    this.getListOfProducts();
  }

  getListOfProducts() {
    this._productService.getProductsList((res) => {
      this.products = res;
    });
    }

  deleteProduct(id) {
    this._productService.deleteProduct((id), (res) => {
      console.log('This called delete product!');
      this.getListOfProducts();
    });
  }


}

