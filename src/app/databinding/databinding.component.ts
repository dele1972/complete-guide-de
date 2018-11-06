import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styles: [`
    .red-border { border: 3px solid red;}
    * {
      margin: auto;
      width: 70%;
    }
    button {
      /* will be used in this component, but databindings are to property-binding.component 😉 */
      width: 150px;
      height: 50px;
      margin: 10px;
      line-height: 50px;
      cursor: pointer;
      background: #3366ff;
      border: 0 solid #3366ff;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    button:hover {
      color: whitesmoke;
      font-size: 1.2em;
    }

  `]
})
export class DatabindingComponent {
  aStringProperty = 'Ich bin ein String';
  aNumberProperty = 10;
  myAttachClass = false;

  constructor() {
    // wird ausgeführt, sobald die component erstellt wird
    setTimeout(() => {
      this.aNumberProperty += 200;
      this.myAttachClass = true;
    }, 3000);
  }

  myOnClick(event: Event) {
    console.log(event);
    this.myAttachClass = !this.myAttachClass;
  }
}
