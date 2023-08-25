import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Subscription, tap } from 'rxjs';
import { Product } from '../../models/product.model';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  categories: Category[] = [];
  loading: boolean = false;
  productSubscription!: Subscription;
  categorySubscription!: Subscription;

  constructor(
    private productService: ProductsService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.categories = this.categoryService.getcategories();
    this.productSubscription = this.productService.productsChanged.subscribe(
      (products: Product[]) => {
        this.products = products;
      }
    );
    this.categorySubscription = this.categoryService.categoriesChanged.subscribe(
      (categories: Category[]) => {
        this.categories = categories;
      }
    );
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
    this.categorySubscription.unsubscribe();
  }

  filterByCategory(event: any) {
    let categoryName = event.target.value;
    categoryName == 'all'
      ? this.products
      : this.getProductsCategory(categoryName);
  }

  getProductsCategory(categoryName: string) {
    this.loading = true;
    this.productService.getProductsByCategory(categoryName).subscribe(
      (res: any) => {
        this.products = res;
        this.loading = false;
      },
      (error) => {
        alert(error.message);
        this.loading = false;
      }
    );
  }
}
