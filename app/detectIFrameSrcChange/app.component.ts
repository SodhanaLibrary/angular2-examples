import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h4>Detect IFrame Src Change</h4>
  <iframe #myIframe id="myIframe" (load)="onLoadFunc(myIframe)" src="frame2.html"></iframe>
  <h4> Current Source : {{source}}</h4>
  `
})
export class AppComponent {
  source: string = '';

  onLoadFunc(myIframe) {
    this.source = myIframe.contentWindow.location.href;
  }
}
