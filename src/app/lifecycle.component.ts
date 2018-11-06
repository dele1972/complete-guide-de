import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChange, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <div>
      Name: {{ name }}
    </div>
  `,
  styles: []
})
export class LifecycleComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() name: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('1 ngOnChanges', 'old Value: ' + changes['name'].previousValue, 'new Value: ' + changes['name'].currentValue);
  }
  ngOnInit() {
    console.log('2 OnInit');
  }
  ngDoCheck() {
    console.log('3 ngDoCheck');
  }
  ngOnDestroy() {
    console.log('4 ngOnDestroy');
  }
  ngAfterContentChecked() {
    console.log('5 ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('6 ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('7 ngAfterViewChecked');
  }
}
