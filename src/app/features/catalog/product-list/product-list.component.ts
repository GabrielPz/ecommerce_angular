import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../../core/services/catalog.service';
import { Product } from '../../../core/models/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private catalogService: CatalogService) {}

  ngOnInit(): void {
    this.catalogService.products$.subscribe(products => this.products = products);
  }
}
