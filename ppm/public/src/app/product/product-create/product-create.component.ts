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

  constructor(      
    private _productService: ProductService, 
    private _router: Router, 
    private _route: ActivatedRoute
) { }

  ngOnInit() {
    this.newProduct = { title: "", price: "", imagePath: "" };
  }

  addProduct() {
    this._productService.newProduct(this.newProduct, (res) => {
      this._router.navigate(['/products', res]);
    });
  };

}
