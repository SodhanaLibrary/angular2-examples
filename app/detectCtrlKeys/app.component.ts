import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h2>Detect Ctrl + C and Ctrl + V and Ctrl + S using Angular2</h2>
  <div>
    <h4>{{keyText}}</h4>
    <textarea (keyup)="onKeyUp($event)" rows="4" cols="30">type Ctrl + C and Ctrl + V and Ctrl + S here</textarea>
  </div>
  `
})
export class AppComponent {
  keyText: string = '';

  onKeyUp($event): void {
    let charCode = String.fromCharCode($event.which).toLowerCase();

    if ($event.ctrlKey && charCode === 'c') {
        this.keyText = 'Ctrl + C pressed';
    } else if ($event.ctrlKey && charCode === 'v') {
        this.keyText = 'Ctrl + V pressed';
    } else if ($event.ctrlKey && charCode === 's') {
        $event.preventDefault();
        this.keyText = 'Ctrl + S pressed';
    }
  }

}
