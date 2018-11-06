import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <div (click)="myOnClick2()"></div>
  `,
  styles: [`
    * {
      margin: auto;
      width: 50%;
      background: azure;
    }
    div {
      width: 100px;
      height: 100px;
      background: gold;
    }
  `]
})
export class EventBindingComponent {
  @Output() clicked = new EventEmitter<string>(); // Object from Angular2 to start custom Events
  myOnClick2() {
    this.clicked.emit('my new Text');
  }
}
