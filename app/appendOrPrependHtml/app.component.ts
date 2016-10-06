import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h2>Append or Prepend HTML to div</h2>
  <div>
    <button (click)="append()">Append</button>
    <button (click)="prepend()">Prepend</button>
  </div><br/><br/>
  <div [innerHTML]="myHtml"></div>
  `
})
export class AppComponent {
  myHtml: string = '<div><i>basic initial HTML</i></div>';
  appendedHtml: string = '<div><b>this appended html</b></div>';
  prenpendHtml: string = '<div><b>this prepended html</b></div>';

  append(): void {
    this.myHtml = this.myHtml + this.appendedHtml;
  }

  prepend(): void {
    this.myHtml = this.prenpendHtml + this.myHtml;
  }

}
