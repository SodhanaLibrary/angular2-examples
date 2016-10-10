import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h4>Focus and UnFocus below Text filed</h4>
  <input  (focus)="myFocusVar = true" (blur)="myFocusVar = false"/><br>
  <h4>Focus result</h4>
  <div class="red" ng-bind="myFocusVar">
    {{myFocusVar}}
  </div>
  `
})
export class AppComponent {
  myFocusVar: boolean = false;
}
