import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
   <h4>Focus to select text</h4>
   <input (focus)="selectAllContent($event)" (mouseup)="$event.preventDefault()" value="sample value"/><br>
  `
})
export class AppComponent {
  selectAllContent($event) {
    $event.target.select();
  }
}
