import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';
import { Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsChanged = new Subject<Product[]>();
  private products: Product[] = [];

  constructor(private http: HttpClient) { }

  getProducts(): Product[] {
    return this.products.slice();
  }

  setProducts(products: Product[]) {
    this.products = products;
    this.productsChanged.next(this.products.slice());
  }

  getProductsByCategory(categoryName: string) {
    return this.http.get(environment.baseApi + 'products/category/' + categoryName);
  }

}
