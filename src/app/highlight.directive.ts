import {Directive, ElementRef, HostBinding, Renderer2, OnInit, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  /*constructor(myElRef: ElementRef, myRenderer: Renderer2) {
    // myElRef.nativeElement.style.backgroundColor = 'green';
    // myRenderer.setElementStyle(myElRef.nativeElement, 'background-color', 'red');
    myRenderer.setStyle(myElRef.nativeElement, 'background-color', 'red');
  }*/
  @HostBinding('style.backgroundColor') myColorProperty = 'blue';
  @HostListener('mouseenter') myMouseenter() {
    this.myColorProperty = 'silver';
  }
  @HostListener('mouseleave') myMouseleave() {
    this.myColorProperty = '#ffccff';
  }

  ngOnInit() {
    setTimeout(() => {
      this.myColorProperty = 'gold';
    }, 3000);
  }
}
