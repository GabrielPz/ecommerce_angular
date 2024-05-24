import { Component, Input } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { Product } from '../../../core/models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() product!: Product;

  constructor(private cartService: CartService) {}

  increaseQuantity() {
    this.cartService.updateQuantity(this.product.id, this.product.quantity + 1);
  }

  decreaseQuantity() {
    if (this.product.quantity > 1) {
      this.cartService.updateQuantity(this.product.id, this.product.quantity - 1);
    }
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product.id);
  }
}
