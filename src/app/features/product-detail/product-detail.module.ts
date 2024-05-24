import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductDetailRoutingModule
  ]
})
export class ProductDetailModule { }
