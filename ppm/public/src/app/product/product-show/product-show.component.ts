import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {
  product: any;

  errors: any = {};

  constructor(
    private _productService: ProductService,
    private _router: Router,
    private _route: ActivatedRoute
   ) { }

  ngOnInit() {
    this.product = { name: "", qty: "", price: "" };
    this.getProduct();
  }
å
  getProduct(){
    this._route.paramMap.subscribe(params => {
      this._productService.getProductById(params.get('id'), (res) => {
        this.product = res;
      });
    });
  }

  deleteProduct(id) {
    this._productService.deleteProduct((id), (res) => {
      console.log('This called delete product!');
      this._router.navigate(['/products']);
    });
  }

}