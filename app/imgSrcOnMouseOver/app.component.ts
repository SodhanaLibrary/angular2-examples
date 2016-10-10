import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h2>Change Image Source On Mouse Over Using Angular 2</h2>
  <div>
    <img [src]="imgSrc" (mouseover)="onMouseOver()" (mouseout)="onMouseOut()"/>
  </div>
  `
})
export class AppComponent {
  imgSrc: string = "../css/assets/twitter_brown.png";

  onMouseOver(): void {
    this.imgSrc = "../css/assets/twitter_blue.png";
  }

  onMouseOut(): void {
    this.imgSrc = "../css/assets/twitter_brown.png";
  }
}
