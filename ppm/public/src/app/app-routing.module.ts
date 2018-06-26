import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductHomeComponent } from './product/product-home/product-home.component';

const routes: Routes = [
  { 
    path: '',
    component: ProductHomeComponent,
    pathMatch: 'full'
  },
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
