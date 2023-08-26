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

  add() {
    this.cartItem.emit(this.item);
  }

}
