import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h2>Type something in below textbox</h2>
    <div>Value : <b>{{value}}</b><div>
    <input customEvent (onUserStopTyping)="changeValue($event)"/>
  `
})
export class AppComponent {
  value: string = '';

  changeValue(event: any) {
    this.value = event.value;
  }

}
