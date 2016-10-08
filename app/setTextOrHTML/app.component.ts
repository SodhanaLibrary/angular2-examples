import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h2>Append or Prepend HTML to div</h2>
  <div>
    <button (click)="setText()">Set Text</button>
    <button (click)="setHtml()">Set HTML</button>
  </div><br/><br/>
  <div [innerHTML]="myHtml"></div>
  `
})
export class AppComponent {
  myHtml: string = '<div><i>basic initial HTML</i></div>';
  text: string = 'this is sample text';
  html: string = '<div><b>this is sample html</b></div>';

  setText(): void {
    this.myHtml = this.text;
  }

  setHtml(): void {
    this.myHtml = this.html;
  }
}
