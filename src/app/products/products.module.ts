import { NgModule } from '@angular/core';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductResolverService } from './services/product-resolver.service';
import { CategoryResolverService } from './services/category-resolver.service';
import { ProductComponent } from './components/product/product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AllProductsComponent, ProductsDetailsComponent, ProductComponent],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AllProductsComponent,
        resolve: { routeResolver: ProductResolverService, CategoryResolverService },
      },
      { path: ':id', component: ProductsDetailsComponent },
    ]),
  ]
})
export class ProductsModule {}
