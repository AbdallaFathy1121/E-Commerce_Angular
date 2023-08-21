import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'products', loadChildren: () => import('./products/products.module').then(x => x.ProductsModule)},
  {path: 'cart', loadChildren: () => import('./carts/carts.module').then(x => x.CartsModule)},
  {path: "**", redirectTo: "products", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
