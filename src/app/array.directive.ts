import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[array-directive]',
})
export class arrayDirettiva implements OnInit {
  constructor(private element: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.element.nativeElement.style.color = 'blue';
  }
}
