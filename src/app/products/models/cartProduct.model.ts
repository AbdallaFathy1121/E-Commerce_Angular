import { Product } from "./product.model";

export class CartProduct {
    constructor(
      public item: Product,
      public quantity: number
    ) {}
  }
  