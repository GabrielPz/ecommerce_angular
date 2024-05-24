import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
  @Input() appHighlight = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    if (this.appHighlight) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'background-color');
    }
  }
}
