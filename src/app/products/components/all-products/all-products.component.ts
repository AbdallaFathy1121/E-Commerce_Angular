import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];
  loading: boolean = false;

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loading = true;
    this.service.getAllProducts().subscribe((res:any) => {
      this.products = res;
      this.loading = false;
    }, error => {
      alert(error.message);
      this.loading = false;
    });
  }

  getCategories() {
    this.service.getAllCategories().subscribe((res:any) => {
      this.categories = res;
    }, error => {
      alert(error.message);
    });
  }

  filterByCategory(event: any) {
    let categoryName = event.target.value;
    (categoryName == "all") ? this.getProducts() : this.getProductsCategory(categoryName);
  }

  getProductsCategory(categoryName: string) {
    this.loading = true;
    this.service.getProductsByCategory(categoryName).subscribe((res:any) => {
      this.products = res;
      this.loading = false;
    }, error => {
      alert(error.message);
      this.loading = false;
    });
  }


}
