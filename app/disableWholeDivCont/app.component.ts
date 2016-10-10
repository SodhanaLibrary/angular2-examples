import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h4>Disable Whole DIV Content</h4>

    <button (click)="disableDIV = true">Disable Below UI</button>
    <button (click)="disableDIV = false">Enable Below UI</button>

    <div class="disable-whole-div__myDIV">
        <div class="disable-whole-div__cover" [hidden]="!disableDIV"></div>
         div 1 <br /> <a href="">link 1</a>
    </div>
  `
})
export class AppComponent {
  disableDIV: boolean = false;
}
