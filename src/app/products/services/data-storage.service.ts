import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from '../models/product.model';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs';
import { Category } from '../models/category.model';
import { CategoryService } from './category.service';

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private productService: ProductsService,
    private categoryService: CategoryService
  ) {}

  fetchProducts() {
    return this.http
        .get<Product[]>(
            environment.baseApi + 'products'
        )
        .pipe(
            tap((products) => {
                this.productService.setProducts(products);
            })
        );
  }

  fetchCategories() {
    return this.http
      .get<Category[]>(
        environment.baseApi + 'products/categories'
      )
      .pipe(
        tap((categories) => {
            this.categoryService.setCategories(categories);
        })
      );
  }




}
