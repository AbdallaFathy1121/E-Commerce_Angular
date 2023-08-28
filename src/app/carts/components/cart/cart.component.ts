import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/products/models/cartProduct.model';
import { CartsService } from '../../services/carts.service';
import { Subscription } from 'rxjs';
import { CartStorageService } from '../../services/cart-storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy {
  cartProducts: CartProduct[] = [];
  total: number = 0;
  cartProductsSubscription!: Subscription;
  totalSubscription!: Subscription;
  isLoading: boolean = false;

  constructor(
    private cartService: CartsService,
    private cartStorageService: CartStorageService
  ) {}

  ngOnInit(): void {
    this.cartProducts = this.cartService.getCartProducts();
    this.total = this.cartService.getCartTotal();
    this.cartProductsSubscription = this.cartService.changedCartProducts.subscribe(
      (items) => {
        this.cartProducts = items;
      });
    this.totalSubscription = this.cartService.changedTotal.subscribe(
      (totla) => {
        this.total = totla;
      }
    );
  }

  ngOnDestroy(): void {
    this.cartProductsSubscription.unsubscribe();
    this.totalSubscription.unsubscribe();
  }

  onChangeQuantity() {
    this.cartService.changeQuantity(this.cartProducts);
  }

  onDeleteProduct(index: number) {
    this.cartService.deleteProduct(index);
  }

  onClearCart() {
    this.cartService.clearCart();
  }

  sendNewCart() {
    let products = this.cartProducts.map((item) => {
      return { productId: item.item.id, quantity: item.quantity };
    });

    let model = {
      userId: 5,
      date: new Date(),
      products: products,
    };

    this.isLoading = true;
    this.cartStorageService.sendNewCart(model).subscribe((res) => {
      this.cartService.clearCart();
      console.log(res);
      this.isLoading = false;
    });
  }
}
