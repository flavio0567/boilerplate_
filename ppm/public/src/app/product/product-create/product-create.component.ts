import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  newProduct: any;
  errors: any;

  constructor(      
    private _productService: ProductService, 
    private _router: Router, 
    private _route: ActivatedRoute
) { }

  ngOnInit() {
    this.newProduct = { name: "", qty: "", price: "", count: "" };
  }

  addProduct(product) {
    console.log('product:' , product);
    this._productService.newProduct(this.newProduct, (res) => {
      if(res.errors) {
        console.log('Something went wrong when saving product', res.errors);
        this.errors = res.errors;
        this._router.navigate(['/products/new']);
      } else {
        this._router.navigate(['/products', res]);
      }
    });
  };

}
