import { Component } from '@angular/core';
import { Product } from '../../../core/models/product';
import { CartService } from '../../../core/services/cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  cartItems: Product[] = [];
  displayCart = false;

  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe(items => this.cartItems = items);
  }

  toggleCart() {
    this.displayCart = !this.displayCart;
  }

  get cartItemCount() {
    return this.cartItems.reduce((count, item) => count + item.quantity, 0);
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
