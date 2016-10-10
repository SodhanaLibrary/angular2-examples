import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h2>Cursor Position : {{caretPos}}</h2>
  <div>
    <textarea rows="4" #myTextArea (click)="getCaretPos(myTextArea)" (keyup)="getCaretPos(myTextArea)" cols="40" >Sample Text Here, Place cursor here</textarea>
  </div>
  `
})
export class AppComponent {
  caretPos: number = 0;

  getCaretPos(oField) {
    if (oField.selectionStart || oField.selectionStart == '0') {
       this.caretPos = oField.selectionStart;  
    }
  }
}
