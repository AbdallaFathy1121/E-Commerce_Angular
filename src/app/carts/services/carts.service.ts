import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartProduct } from 'src/app/products/models/cartProduct.model';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  cartProducts: CartProduct[] = [];
  total: number = 0;
  changedCartProducts = new Subject<CartProduct[]>();
  changedTotal = new Subject<number>();
  
  getCartProducts() {
    if ('cart' in localStorage) {
      return this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
  }

  getCartTotal() {
    this.total = 0;
    for (let x in this.cartProducts) {
      this.total +=
        this.cartProducts[x].item.price * this.cartProducts[x].quantity;
    }
    this.changedTotal.next(this.total);
    return this.total;
  }

  changeQuantity(cartProducts: CartProduct[]) {
    this.cartProducts = cartProducts;
    this.changedCartProducts.next(this.cartProducts.slice());
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.getCartTotal();
  }

  deleteProduct(index: number) {
    this.cartProducts.splice(index, 1);
    this.changedCartProducts.next(this.cartProducts.slice());
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.getCartTotal();
  }

  clearCart() {
    this.cartProducts = [];
    this.changedCartProducts.next(this.cartProducts.slice());
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.getCartTotal();
  }

}
