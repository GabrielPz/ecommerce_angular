import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../core/models/product';
import { CatalogService } from '../../../core/services/catalog.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
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
      title: new FormControl(this.productToUpdate?.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),
      description: new FormControl(this.productToUpdate?.description, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(500)
      ]),
      price: new FormControl(this.productToUpdate?.price, [
        Validators.required,
        Validators.min(0.01)
      ]),
      quantity: new FormControl(this.productToUpdate?.quantity, [
        Validators.required,
        Validators.min(0),
        Validators.pattern("^[0-9]*$")  // Ensure it's an integer
      ]),
      imageUrl: new FormControl(this.productToUpdate?.imageUrl, [
        Validators.required,
        Validators.pattern('https?://.+')
      ])
    });
  }

  isFieldInvalid(field: string): boolean {
    const control = this.productForm.get(field);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  formSubmit() {
    if (this.productForm.invalid) {
      alert("Inválido")
      return;
    }

    let productData: Product = this.productForm.value;
    productData.name = this.productForm.value.title;

    alert(JSON.stringify(productData.name))
    if (this.productId) {
      this.catalogService.updateProduct(productData);
    } else {
      this.catalogService.addProduct(productData);
      this.productForm.reset();
    }
  }
}
