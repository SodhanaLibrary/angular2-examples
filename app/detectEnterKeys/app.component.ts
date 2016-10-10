import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h2>Detect Enter Key Press using Angular2</h2>
  <div>
    <h4>{{keyText}}</h4>
    <textarea (keyup)="onKeyUp($event)" rows="4" cols="30">Press Enter Key Here</textarea>
  </div>
  `
})
export class AppComponent {
  keyText: string = '';

  onKeyUp($event): void {
    if($event.code === "Enter") {
      this.keyText = "Enter key pressed";
    } else {
      this.keyText = "";
    }
  }

}
