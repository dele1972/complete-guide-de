import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    div {width: 100px; height: 100px;}
  `]
})
export class AppComponent {
  title = 'complete-guide-de';
  propertyColor = 'gold';

  constructor() {
    setTimeout(() => {
      this.propertyColor = 'green';
    }, 3000);
  }
}
