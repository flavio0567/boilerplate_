webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var product_list_component_1 = __webpack_require__("./src/app/product/product-list/product-list.component.ts");
var product_create_component_1 = __webpack_require__("./src/app/product/product-create/product-create.component.ts");
var product_edit_component_1 = __webpack_require__("./src/app/product/product-edit/product-edit.component.ts");
var page_not_found_component_1 = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
var product_home_component_1 = __webpack_require__("./src/app/product/product-home/product-home.component.ts");
var routes = [
    {
        path: '',
        component: product_home_component_1.ProductHomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'products',
        component: product_list_component_1.ProductListComponent,
        pathMatch: 'full'
    },
    {
        path: 'products/new',
        component: product_create_component_1.ProductCreateComponent,
        pathMatch: 'full'
    },
    {
        path: 'products/edit/:id',
        component: product_edit_component_1.ProductEditComponent,
        pathMatch: 'full'
    },
    {
        path: 'reset',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: page_not_found_component_1.PageNotFoundComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"content is-large\"> \n    {{ title }}\n</div>\n\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Project Product Management';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
// import { MatDialogModule } from '@angular/material';
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var product_list_component_1 = __webpack_require__("./src/app/product/product-list/product-list.component.ts");
var product_edit_component_1 = __webpack_require__("./src/app/product/product-edit/product-edit.component.ts");
var product_create_component_1 = __webpack_require__("./src/app/product/product-create/product-create.component.ts");
var product_home_component_1 = __webpack_require__("./src/app/product/product-home/product-home.component.ts");
var page_not_found_component_1 = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
var product_service_1 = __webpack_require__("./src/app/product/product.service.ts");
// import { Dialog } from './product/product-list/product-list.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                product_list_component_1.ProductListComponent,
                product_edit_component_1.ProductEditComponent,
                product_create_component_1.ProductCreateComponent,
                product_home_component_1.ProductHomeComponent,
                page_not_found_component_1.PageNotFoundComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule
            ],
            // entryComponents:[Dialog],
            providers: [product_service_1.ProductService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        core_1.Component({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
exports.PageNotFoundComponent = PageNotFoundComponent;


/***/ }),

/***/ "./src/app/product/product-create/product-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product-create/product-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n    <button type=\"button\" class=\"button is-light\" [routerLink]=\"['/']\">Home</button>\n    <button type=\"button\" class=\"button is-light\" [routerLink]=\"['/products']\">Product List</button>\n</div>\n<br><br>\n<form (submit)=\"addProduct()\" #formData=\"ngForm\">\n  <div class=\"form-group row box0\"> \n\n    <div class=\"col-sm-12\" >\n        <label class=\"col-form-label\">Title:</label>\n        <input \n        type=\"text\" \n        class=\"form-control\" \n        name=\"title\" \n        required\n        minlength=2\n        [(ngModel)]=\"newProduct.title\"\n        #title=\"ngModel\"\n        />\n       <div *ngIf=\"!title.valid\" class=\"red\">*Title {{ newProduct.title }} must be at least 4 characters in length!</div>\n    </div>\n\n    <div class=\"col-sm-12\">\n        <label class=\"col-form-label\">Price:</label>\n          <input \n          type=\"text\" \n          class=\"form-control\" \n          name=\"newProduct.price\" \n          [(ngModel)]=\"newProduct.price\" \n          #price=\"ngModel\"\n          />\n          <!-- <div *ngIf=\"!title.valid\" class=\"red\">*Price {{ newProduct.price }} must be at least 4 characters in length!</div> -->\n    </div>\n\n    <div class=\"col-sm-12\">\n        <label class=\"col-form-label\">Image Url:</label>\n          <input \n          type=\"text\" \n          class=\"form-control\" \n          name=\"newProduct.imagePath\" \n          [(ngModel)]=\"newProduct.imagePath\" \n          #imagePath=\"ngModel\"\n          />\n          <!-- <div *ngIf=\"!title.valid\" class=\"red\">*Price {{ newProduct.price }} must be at least 4 characters in length!</div> -->\n    </div>\n\n    <button class=\"button is-success\" type=\"submit\" [disabled]=\"formData.invalid\">Create</button>\n    <br>\n\n  </div>\n \n</form>\n\n"

/***/ }),

/***/ "./src/app/product/product-create/product-create.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var product_service_1 = __webpack_require__("./src/app/product/product.service.ts");
var ProductCreateComponent = /** @class */ (function () {
    function ProductCreateComponent(_productService, _router, _route) {
        this._productService = _productService;
        this._router = _router;
        this._route = _route;
    }
    ProductCreateComponent.prototype.ngOnInit = function () {
        this.newProduct = { title: "", price: "", imagePath: "" };
    };
    ProductCreateComponent.prototype.addProduct = function () {
        var _this = this;
        this._productService.newProduct(this.newProduct, function (res) {
            _this._router.navigate(['/products', res]);
        });
    };
    ;
    ProductCreateComponent = __decorate([
        core_1.Component({
            selector: 'app-product-create',
            template: __webpack_require__("./src/app/product/product-create/product-create.component.html"),
            styles: [__webpack_require__("./src/app/product/product-create/product-create.component.css")]
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], ProductCreateComponent);
    return ProductCreateComponent;
}());
exports.ProductCreateComponent = ProductCreateComponent;


/***/ }),

/***/ "./src/app/product/product-edit/product-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product-edit/product-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"editProduct(product)\" #formData=\"ngForm\" id=\"editForm\">\n    <div class=\"box0\"> \n\n      <fieldset>\n        <legend>Edit Product</legend>\n        <div class=\"form-group row\">\n          <label for=\"title\">Title</label>\n          <input \n          class=\"form-control\"\n          type=\"text\" \n          name=\"title\" \n          [(ngModel)]=\"product.title\"\n          #title=\"ngModel\"\n          />\n        </div>\n        <div *ngIf=\"!title.valid\" class=\"purple\">Product title must be at least four characters!</div>\n  \n        <div class=\"form-group row\">\n          <label for=\"price\">Price</label>\n          <input \n          class=\"form-control\"\n          type=\"number\" \n          name=\"price\" \n          [(ngModel)]=\"product.price\"\n          #price=\"ngModel\"\n          />\n        </div>\n    \n        <div class=\"form-group row\">\n            <label for=\"imagePath\">Image Url</label>\n            <input \n            class=\"form-control\"\n            type=\"text\" \n            name=\"imagePath\" \n            [(ngModel)]=\"product.imagePath\"\n            #imagePath=\"ngModel\"\n            />\n          </div>\n\n        <button type=\"button\" class=\"button is-danger\" (click)=\"deleteProduct(product['_id'])\">Delete</button>\n        <button type=\"submit\" class=\"button is-link \" [disabled]=\"formData.invalid\">Update</button>\n  {{ error | json }}\n        <div class=\"errors\">\n          <p *ngIf=\"errors.title\" >  {{ errors.title.message }} </p>\n          <p *ngIf=\"errors.price\"> {{ errors.price.message }} </p>        \n        </div>\n   \n        <div class=\"blue\">\n            <p *ngIf=\"errors.success\" >Successfully saving product</p>  \n        </div>\n  \n      </fieldset>\n  \n    </div>\n  \n  </form>"

/***/ }),

/***/ "./src/app/product/product-edit/product-edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var product_service_1 = __webpack_require__("./src/app/product/product.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(_productService, _router, _route) {
        this._productService = _productService;
        this._router = _router;
        this._route = _route;
        this.errors = {};
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        this.product = { title: "", price: "", imagePath: "" };
        this.getProduct();
    };
    ProductEditComponent.prototype.getProduct = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            _this._productService.getProductById(params.get('id'), function (res) {
                _this.product = res;
            });
        });
    };
    ProductEditComponent.prototype.editProduct = function (product) {
        var _this = this;
        this._productService.editProduct(product, function (res) {
            if (res.errors) {
                console.log('Something went wrong when saving product');
                _this.errors = res.errors;
                _this._router.navigate(['/products/edit/'] + product['_id']);
            }
            else {
                console.log('successfully saving product');
                _this.errors.success = 'Successfully saving product';
                _this._router.navigate(['/products']);
            }
        });
    };
    ProductEditComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        this._productService.deleteProduct((id), function (res) {
            console.log('This called delete product!');
            _this._router.navigate(['/products']);
        });
    };
    ProductEditComponent = __decorate([
        core_1.Component({
            selector: 'app-product-edit',
            template: __webpack_require__("./src/app/product/product-edit/product-edit.component.html"),
            styles: [__webpack_require__("./src/app/product/product-edit/product-edit.component.css")]
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], ProductEditComponent);
    return ProductEditComponent;
}());
exports.ProductEditComponent = ProductEditComponent;


/***/ }),

/***/ "./src/app/product/product-home/product-home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product-home/product-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n    <button type=\"button\" class=\"button is-light\" [routerLink]=\"['/']\">Home</button>\n    <button type=\"button\" class=\"button is-light\" [routerLink]=\"['/products']\">Product List</button>\n    <button type=\"button\" class=\"button is-light\" [routerLink]=\"['/products/new']\">Product Creation</button>\n</div>\n<br>\n<br>\n\n<div class=\"box\">\n    <article class=\"media\">\n\n      <div class=\"media-content\">\n        <div class=\"content\">\n          <p>\n              <strong>Home Page</strong> \n            <br>\n            Welcome to Project Product Management. Here we can manage a set of products. You are able to create new products, remove old products, and edir produts.\n          </p>\n        </div>\n  \n      </div>\n    </article>\n  </div>"

/***/ }),

/***/ "./src/app/product/product-home/product-home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ProductHomeComponent = /** @class */ (function () {
    function ProductHomeComponent() {
    }
    ProductHomeComponent.prototype.ngOnInit = function () {
    };
    ProductHomeComponent = __decorate([
        core_1.Component({
            selector: 'app-product-home',
            template: __webpack_require__("./src/app/product/product-home/product-home.component.html"),
            styles: [__webpack_require__("./src/app/product/product-home/product-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductHomeComponent);
    return ProductHomeComponent;
}());
exports.ProductHomeComponent = ProductHomeComponent;


/***/ }),

/***/ "./src/app/product/product-list/product-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n    <button type=\"button\" class=\"button is-light\" [routerLink]=\"['/']\">Home</button>\n    <button type=\"button\" class=\"button is-light\" [routerLink]=\"['/products/new']\">Product Creation</button>\n</div> \n\n<div class=\"box\">\n    <article class=\"media\">\n\n      <div class=\"media-content\">\n        <div class=\"content\">\n          <strong>Product List</strong> \n          <br>\n          <div id=\"scroll\">\n              <table class=\"table table-hover\" align=\"left\">\n                <tbody>\n                  <tr *ngFor=\"let product of products\" class=\"d-flex\">\n                    <td>\n                      <figure class=\"media-left\">\n                          <p class=\"image is-128x128\">\n                            <img src=\"{{product['imagePath']}}\">\n                          </p>\n                        </figure>\n                    </td>\n                    <td class=\"col-6\">{{ product['title'] }}</td>\n                    <td class=\"col-4\">{{ product['price'] | number : '1.2-2' }}</td>\n                    <td class=\"col-3\"><button mat-button [routerLink]=\"['/products/edit', product['_id'] ]\" class=\"button is-warning\">Edit</button></td>\n                    <td class=\"col-3\"><button mat-button (click)=\"deleteProduct(product['_id'])\" class=\"button is-danger\">Delete</button></td>\n                    <!-- <td class=\"col-3\"><button mat-button (click)=\"openDialog(player)\" class=\"button is-danger\">Delete</button></td> -->\n                  </tr>\n                </tbody>\n              </table> \n            </div>\n              \n    \n        </div>\n  \n      </div>\n    </article>\n  </div>"

/***/ }),

/***/ "./src/app/product/product-list/product-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var product_service_1 = __webpack_require__("./src/app/product/product.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(_productService, _router) {
        this._productService = _productService;
        this._router = _router;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.getListOfProducts();
    };
    ProductListComponent.prototype.getListOfProducts = function () {
        var _this = this;
        this._productService.getProductsList(function (res) {
            _this.products = res;
        });
    };
    ProductListComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        this._productService.deleteProduct((id), function (res) {
            console.log('This called delete product!');
            _this.getListOfProducts();
        });
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'app-product-list',
            template: __webpack_require__("./src/app/product/product-list/product-list.component.html"),
            styles: [__webpack_require__("./src/app/product/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService, router_1.Router])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;


/***/ }),

/***/ "./src/app/product/product.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var ProductService = /** @class */ (function () {
    // user;
    // player: Player;
    function ProductService(_http) {
        this._http = _http;
    }
    // login(user, callback) {
    //   this.user = user;
    //   console.log('LOGIN success: ', this.user);
    //   callback(this.user);
    // }
    ProductService.prototype.getProductsList = function (products) {
        this._http.get('/products/list').subscribe(function (res) {
            console.log('SUCCESS in getting products: ', res.json());
            products(res.json());
        }, function (err) {
            console.log('ERROR in getting products: ', err);
        });
    };
    ProductService.prototype.newProduct = function (product, callback) {
        this._http.post('/products/new', { product: product }).subscribe(function (res) {
            console.log('SUCCESS creatting products: ', res.json());
            callback(res.json());
        }, function (err) {
            console.log('ERROR creatting products: ', err);
        });
    };
    ProductService.prototype.deleteProduct = function (id, callback) {
        this._http.delete('/delete/' + id).subscribe(function (res) {
            console.log('SUCCESS in deleting product: ', res.json());
            callback(res.json());
        }, function (err) {
            console.log('ERROR in deleting product: ', err);
        });
    };
    ProductService.prototype.editProduct = function (product, callback) {
        this._http.put('/products/edit', product).subscribe(function (res) {
            console.log('SUCCESS updating Product: ', res.json());
            callback(res.json());
        }, function (err) {
            console.log('ERROR updating Product: ', err);
        });
    };
    ProductService.prototype.getProductById = function (id, callback) {
        this._http.get('/products/' + id).subscribe(function (res) {
            console.log('SUCCESS getting ProductByID: ', res.json());
            callback(res.json());
        }, function (err) {
            console.log('ERROR getting ProductByID: ', err);
        });
    };
    ProductService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map