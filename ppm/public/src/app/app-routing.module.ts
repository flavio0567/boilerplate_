import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductShowComponent } from './product/product-show/product-show.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
    pathMatch: 'full'
  },
  {
    path: 'products/new',
    component: ProductCreateComponent,
    pathMatch: 'full'
  },
  {
    path: 'products/edit/:id',
    component: ProductEditComponent,
    pathMatch: 'full'
  },
  {
    path: 'products/:id',
    component: ProductShowComponent,
    pathMatch: 'full'
  },
  { 
    path: 'reset',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
