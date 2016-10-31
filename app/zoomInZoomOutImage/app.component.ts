import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h2>Mouse wheel scroll on below image</h2>
    <img mouseWheel [style.width]="imgWidth" src="sample.png" (mouseWheelUp)="mouseWheelUpFunc()" (mouseWheelDown)="mouseWheelDownFunc()"/>
  `
})
export class AppComponent {
  mouseWheelDir: string = '';
  imgWidth: number = 300;

  mouseWheelUpFunc() {
    console.log('mouse wheel up');
    this.imgWidth = this.imgWidth+10;
  }

  mouseWheelDownFunc() {
    console.log('mouse wheel down');
    this.imgWidth = this.imgWidth-10;
  }
}
