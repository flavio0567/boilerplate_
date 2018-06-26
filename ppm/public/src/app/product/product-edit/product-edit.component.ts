import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: any;
  produtcSave: any;
  errors: any = {};

  constructor(
    private _productService: ProductService,
    private _router: Router,
    private _route: ActivatedRoute
   ) { }

  ngOnInit() {
    this.product = { name: "", qty: "",  price: "" };
    this.getProduct();
    this.produtcSave = this.product;
    console.log("saved prod", this.produtcSave);
  }
å
  getProduct(){
    this._route.paramMap.subscribe(params => {
      this._productService.getProductById(params.get('id'), (res) => {
        this.product = res;
      });
    });
  }

  editProduct(product) {
    console.log('product in edit:', product);
    this._productService.editProduct(product, (res) => { 
      if(res.errors) {
        console.log('Something went wrong when saving product');
        this.errors = res.errors;
        this._router.navigate(['/products/edit/'] + product['_id']);
      } else {
        console.log('successfully saving product');
        this.errors.success = 'Successfully saving product';
        this._router.navigate(['/products']);
      }
    })
  }

  reset() {
    this.getProduct();
    // this.product = this.produtcSave;
    console.log('product in reset edit:', this.product);
    this._router.navigate(['/products/edit/'] + this.product['_id']);
    // this._router.navigate(['/products/edit/'] + this.product['_id']);
    }

}