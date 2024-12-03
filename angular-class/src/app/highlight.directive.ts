import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private readonly elementRef: ElementRef) {
    this.elementRef.nativeElement.style.background = 'yellow';
  }

}
