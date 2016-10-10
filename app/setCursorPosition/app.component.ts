import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h2>Set Cursor Position Using Angular 2</h2>
  <div>
    <input #myInput type="number" value="3"/> &nbsp;&nbsp;
    <button (click)="setSelectionRange(myTextArea, myInput.value, myInput.value)">Set Caret Position</button>
  </div>
  <br/><br/>
  <div>
    <textarea rows="4" #myTextArea cols="40">Sample Text Here</textarea>
  </div>
  `
})
export class AppComponent {

  setSelectionRange(input, selectionStart, selectionEnd) {
    if (input.setSelectionRange) {
      input.focus();
      input.setSelectionRange(selectionStart, selectionEnd);
    } else if (input.createTextRange) {
      var range = input.createTextRange();
      range.collapse(true);
      range.moveEnd('character', selectionEnd);
      range.moveStart('character', selectionStart);
      range.select();
    }
  }
}
