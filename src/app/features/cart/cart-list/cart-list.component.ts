import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { Product } from '../../../core/models/product';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  cart: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(cart => this.cart = cart);
  }
}
