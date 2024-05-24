import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CatalogRoutingModule
  ]
})
export class CatalogModule { }
