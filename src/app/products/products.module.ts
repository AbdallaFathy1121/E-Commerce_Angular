import { NgModule } from '@angular/core';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: AllProductsComponent},
      {path: ':id', component: ProductsDetailsComponent}
    ])
  ]
})
export class ProductsModule { }
