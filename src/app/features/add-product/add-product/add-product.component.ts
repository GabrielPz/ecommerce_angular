import { Component } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../../../core/models/product';
import { CatalogService } from '../../../core/services/catalog.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {

  private productId: string;
  productToUpdate?: Product;
  productForm: FormGroup;

  constructor (
    private catalogService: CatalogService, 
    private route: ActivatedRoute,
    private router: Router
  ) {
    
    this.productId = this.route.snapshot.params["id"];

    this.productForm = new FormGroup({
      title: new FormControl(this.productToUpdate?.name || "Título Padrão"),
      description: new FormControl(this.productToUpdate?.description),
      price: new FormControl(this.productToUpdate?.price),
      quantity: new FormControl(this.productToUpdate?.quantity),
      imageUrl: new FormControl(this.productToUpdate?.imageUrl)
      
  });
  }

  formSubmit() {
    let productData: Product = this.productForm.value;

    if(this.productId) {
      this.catalogService.updateProduct(productData);
      return;
    }

    this.catalogService.addProduct(productData);
    this.productForm.reset();
  }

}
