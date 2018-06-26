import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductCreateComponent } from './product//product-create/product-create.component';
import { ProductHomeComponent } from './product/product-home/product-home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductService } from './product/product.service';
import { ProductShowComponent } from './product/product-show/product-show.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductCreateComponent,
    ProductHomeComponent,
    PageNotFoundComponent,
    ProductShowComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
