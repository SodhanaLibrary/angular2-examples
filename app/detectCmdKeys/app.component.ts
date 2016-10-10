import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h2>Detect Cmd + C and Cmd + V and Cmd + S using Angular2</h2>
  <div>
    <h4>{{keyText}}</h4>
    <textarea (keydown)="onKeyDown($event)" (keyup)="onKeyUp($event)" rows="4" cols="30">type Ctrl + C and Ctrl + V and Ctrl + S here</textarea>
  </div>
  `
})
export class AppComponent {
  keyText: string = '';
  cmdKey: boolean = false;

  onKeyUp($event): void {
    if($event.keyCode === 224 || $event.keyCode === 17 || $event.keyCode === 91 || $event.keyCode === 93) {
      this.cmdKey = false;
    }
  }

  onKeyDown($event): void {
    if($event.keyCode === 224 || $event.keyCode === 17 || $event.keyCode === 91 || $event.keyCode === 93) {
      this.cmdKey = true;
    }
    let charCode = String.fromCharCode($event.which).toLowerCase();
    if (this.cmdKey && charCode === 'c') {
        this.keyText = 'Cmd + C pressed';
    } else if (this.cmdKey && charCode === 'v') {
        this.keyText = 'Cmd + V pressed';
    } else if (this.cmdKey && charCode === 's') {
        $event.preventDefault();
        this.keyText = 'Cmd + S pressed';
    } else {
        this.keyText = '';
    }
  }

}
