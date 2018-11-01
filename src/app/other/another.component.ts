import { Component } from '@angular/core';

@Component({
  selector: 'app-another',
  template: `
    <h2>another works!</h2>
    <hr/>
    <ng-content>
      <!--
        Inhalte von Außen werden durch die Direktive 'ng-content' eingefügt
        Inhalt von Außen ist alles was zwischen "<app-another>Inhalt</app-another>" steht
      -->
    </ng-content>
  `,
  styles: []
})
export class AnotherComponent {
}
