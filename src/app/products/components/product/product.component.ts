import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() item!: Product;
  @Output() cartItem = new EventEmitter();
  addButton: boolean = false;
  amount: number = 1;

  add() {
    this.cartItem.emit({item: this.item, quantity: this.amount});
  }

}
