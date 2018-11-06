import {Component, ContentChild, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-other',
  template: `
    <input type="text" #inputRef />
    <hr />
    <ng-content></ng-content>
  `,
  styles: []
})
export class OtherComponent {
  @ViewChild('inputRef') inputEl;
  @ContentChild('paragraph') pEl: ElementRef;

  constructor() {
    setTimeout(() => {
      this.inputEl.nativeElement.value = 'Value overwritten!';
      this.pEl.nativeElement.innerText = 'This Value is also overwritten!';
    }, 3000);
  }
}
