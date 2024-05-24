import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { SharedModule } from '../../shared/shared.module';
import { AddProductRoutingModule } from './add-product-routing.module';


@NgModule({
  declarations: [
    AddProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    AddProductRoutingModule,
  ]
})
export class AddProductModule { }
