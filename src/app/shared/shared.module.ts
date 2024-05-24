import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HighlightDirective } from './directives/highlight.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { RouterModule } from '@angular/router';
import { CartDrawerComponent } from './components/navbar/cart-drawer/cart-drawer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HighlightDirective,
    FilterPipe,
    CartDrawerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    HighlightDirective,
    FilterPipe
  ]
})
export class SharedModule { }
