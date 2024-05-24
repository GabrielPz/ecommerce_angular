import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Product } from '../../../core/models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {

  productToUpdate?: Product;
  productForm: FormGroup;

  constructor () {

    this.productForm = new FormGroup({
      title: new FormControl(this.productToUpdate?.name || "Título Padrão"),
      description: new FormControl(this.productToUpdate?.description),
      price: new FormControl(this.productToUpdate?.price),
      quantity: new FormControl(this.productToUpdate?.quantity),
      imageUrl: new FormControl(this.productToUpdate?.imageUrl)
      
  });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const newProduct = this.productForm.value;
      console.log('Product added:', newProduct);
    } else {
      console.log('Form is invalid');
    }
  }

}
