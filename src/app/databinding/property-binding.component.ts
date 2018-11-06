import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    <p>app-property-binding component got this name: {{ myName }}</p>
  `,
  styles: [`
      * {
      margin: auto;
      width: 50%;
      background: antiquewhite;
    }
  `]
})
export class PropertyBindingComponent {
  @Input() myName: string; // Typzuweisung in Typescript
}
