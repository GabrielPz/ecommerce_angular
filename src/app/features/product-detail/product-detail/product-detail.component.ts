import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../core/models/product';
import { CatalogService } from '../../../core/services/catalog.service';
import { CartService } from '../../../core/services/cart.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private catalogService: CatalogService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const productId = +this.route.snapshot.paramMap.get('id')!;
    this.catalogService.products$.subscribe(products => {
      this.product = products.find(p => p.id === productId)!;
    });
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
