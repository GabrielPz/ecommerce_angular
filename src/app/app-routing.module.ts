import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'catalog', pathMatch: 'full' },
  { path: 'catalog', loadChildren: () => import('./features/catalog/catalog.module').then(m => m.CatalogModule) },
  { path: 'cart', loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule) },
  { path: 'add-product', loadChildren: () => import('./features/add-product/add-product.module').then(m => m.AddProductModule) },
  { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
  { path: 'product/:id', loadChildren: () => import('./features/product-detail/product-detail.module').then(m => m.ProductDetailModule) },
  { path: '**', redirectTo: 'catalog' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
