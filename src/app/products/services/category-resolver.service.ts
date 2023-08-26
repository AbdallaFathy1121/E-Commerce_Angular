import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { Category } from '../models/category.model';
import { CategoryService } from './category.service';

export const CategoryResolverService: ResolveFn<Category[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  categoryService: CategoryService = inject(CategoryService),
  dataStorageService: DataStorageService = inject(DataStorageService)
) => {
  const categories = categoryService.getcategories();
  return categories.length === 0
    ? dataStorageService.fetchCategories()
    : categories;
};
