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

  errors: any = {};

  constructor(
    private _productService: ProductService,
    private _router: Router,
    private _route: ActivatedRoute
   ) { }

  ngOnInit() {
    this.product = { title: "", price: "", imagePath: "" };
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

  editProduct(product) {
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

  deleteProduct(id) {
    this._productService.deleteProduct((id), (res) => {
      console.log('This called delete product!');
      this._router.navigate(['/products']);
    });
  }

}