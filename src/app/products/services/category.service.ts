import { Injectable } from "@angular/core";
import { Category } from "../models/category.model";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    categoriesChanged = new Subject<Category[]>();
    private categories: Category[] = [];

    getcategories(): Category[] {
        return this.categories.slice();
    }

    setCategories(categories: Category[]) {
        this.categories = categories;
        this.categoriesChanged.next(this.categories.slice());
    }

}