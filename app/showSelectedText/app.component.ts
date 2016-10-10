import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h3>Select some text </h3>
  <div (mouseup)="showSelectedText()">
  Do you think that facebook, twitter, linkedin are designed to make people addict ?, Then you have to read this article. The most popular social networking sites are following people's habit. It is not concept, it is people's habit
  </div>
  <br/>
  <h3>Selected Text</h3>
  <div>{{selectedText}}</div>
  `
})
export class AppComponent {
  selectedText: string = '';

  showSelectedText(oField) {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    this.selectedText = text;
  }
}
