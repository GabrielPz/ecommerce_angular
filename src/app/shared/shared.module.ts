import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HighlightDirective } from './directives/highlight.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    HighlightDirective,
    FilterPipe
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
