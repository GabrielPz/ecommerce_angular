import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartRoutingModule } from './cart-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CartRoutingModule
  ]
})
export class CartModule { }
