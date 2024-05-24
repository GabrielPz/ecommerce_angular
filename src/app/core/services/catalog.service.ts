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
  private apiUrl = 'https://backendangularproject.onrender.com/products';

  constructor(private http: HttpClient) {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http.get<Product[]>(this.apiUrl)
      .subscribe(products => this.products.next(products));
  }

  addProduct(product: Product) {
    this.http.post<Product>(this.apiUrl, product).subscribe(
      newProduct => {
        const currentProducts = this.products.getValue();
        this.products.next([...currentProducts, newProduct]);
      },
      error => console.error('Error adding product:', error)
    );
  }

  updateProduct(product: Product) {
    return this.http.put(`${this.apiUrl}/${product.id}`, product);
  }

  deleteProduct(productId: number) {
    return this.http.delete(`${this.apiUrl}/${productId}`);
  }
}
