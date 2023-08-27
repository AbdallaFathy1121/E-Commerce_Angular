import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ActivatedRoute, Params } from '@angular/router';
import { DataStorageService } from '../../services/data-storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css'],
})
export class ProductsDetailsComponent implements OnInit, OnDestroy {
  id!: number;
  product!: Product;
  paramsSubscription!: Subscription;
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.dataStorageService.fetchProductById(this.id).subscribe((item) => {
        this.product = item;
        this.isLoading = false;
      });
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
