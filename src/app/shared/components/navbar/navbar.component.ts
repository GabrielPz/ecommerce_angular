import { Component } from '@angular/core';
import { Product } from '../../../core/models/product';
import { CartService } from '../../../core/services/cart.service';
import { CartDrawerComponent } from './cart-drawer/cart-drawer.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  cartItems: Product[] = [];
  displayCart = true;

  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe((items) => (this.cartItems = items));
  }

  toggleCart() {
    this.displayCart = !this.displayCart;
  }

  get cartItemCount() {
    return this.cartItems.reduce((count, item) => count + item.quantity, 0);
  }

}
