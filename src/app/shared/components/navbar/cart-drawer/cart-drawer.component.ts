import { CartService } from './../../../../core/services/cart.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../core/models/product';

@Component({
  selector: 'app-cart-drawer',
  templateUrl: './cart-drawer.component.html',
  styleUrl: './cart-drawer.component.scss',
})
export class CartDrawerComponent {
  @Input({ required: true }) isVisible!: boolean;
  @Output() onClose = new EventEmitter();
  products: Product[] = [];

  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe((items) => (this.products = items));
  }

  close() {
    this.onClose.emit();
  }

  increaseQuantity(product: Product) {
    this.cartService.updateQuantity(product.id, product.quantity + 1);
  }

  decreaseQuantity(product: Product) {
    if (product.quantity > 1) {
      this.cartService.updateQuantity(product.id, product.quantity - 1);
    }
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product.id);
  }
}
