import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new BehaviorSubject<Product[]>([]);
  cart$ = this.cart.asObservable();

  addToCart(product: Product) {
    const currentCart = this.cart.value;
    const productIndex = currentCart.findIndex(p => p.id === product.id);

    if (productIndex !== -1) {
      currentCart[productIndex].quantity += 1;
    } else {
      product.quantity = 1;
      currentCart.push(product);
    }

    this.cart.next(currentCart);
  }

  updateQuantity(productId: number, quantity: number) {
    const currentCart = this.cart.value;
    const productIndex = currentCart.findIndex(p => p.id === productId);

    if (productIndex !== -1) {
      currentCart[productIndex].quantity = quantity;
      this.cart.next(currentCart);
    }
  }

  removeFromCart(productId: number) {
    const currentCart = this.cart.value.filter(p => p.id !== productId);
    this.cart.next(currentCart);
  }

  clearCart() {
    this.cart.next([]);
  }
}
