import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h2>Mouse wheel scroll on below div</h2>
    <h4 style="color:green">{{mouseWheelDir}}</h4>
    <div mouseWheel (mouseWheelUp)="mouseWheelUpFunc(event)" (mouseWheelDown)="mouseWheelDownFunc(event)" style="width:500px;height:500px;border:1px solid #ccc"></div>
  `
})
export class AppComponent {
  mouseWheelDir: string = '';

  mouseWheelUpFunc() {
    this.mouseWheelDir = 'upward direction';
  }

  mouseWheelDownFunc() {
    this.mouseWheelDir = 'downward direction';
  }
}
