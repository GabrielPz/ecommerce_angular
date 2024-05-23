import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private products = new BehaviorSubject<Product[]>([]);
  products$ = this.products.asObservable();
  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http.get<Product[]>(this.apiUrl)
      .subscribe(products => this.products.next(products));
  }

  addProduct(product: Product) {
    return this.http.post(this.apiUrl, product);
  }

  updateProduct(product: Product) {
    return this.http.put(`${this.apiUrl}/${product.id}`, product);
  }

  deleteProduct(productId: number) {
    return this.http.delete(`${this.apiUrl}/${productId}`);
  }
}
