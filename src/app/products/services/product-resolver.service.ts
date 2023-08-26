import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Product } from '../models/product.model';
import { ProductsService } from './products.service';
import { inject } from '@angular/core';
import { DataStorageService } from './data-storage.service';

export const ProductResolverService: ResolveFn<Product[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  productService: ProductsService = inject(ProductsService),
  dataStorageService: DataStorageService = inject(DataStorageService)
) => {
  const products = productService.getProducts();
  return products.length === 0 
    ? dataStorageService.fetchProducts() 
    : products;
};
