import { Component } from '@angular/core';
import { NgZone } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div style="position:fixed;top:0px;padding:10px;border:1px solid #ccc;color:red">Status :  <strong>{{statusText}}</strong> </div>
  <div style="height:1000px;padding:10px;border:1px solid #ccc;">
  Scroll to the bottom and find the alert
  </div>
  <br/>
  <h3>bottom</h3>
  `
})
export class AppComponent {
  statusText: string = "not reached";

  constructor(lc: NgZone) {
     window.onscroll = () => {
         let status = "not reached";
         let windowHeight = "innerHeight" in window ? window.innerHeight
             : document.documentElement.offsetHeight;
         let body = document.body, html = document.documentElement;
         let docHeight = Math.max(body.scrollHeight,
             body.offsetHeight, html.clientHeight,
             html.scrollHeight, html.offsetHeight);
         let windowBottom = windowHeight + window.pageYOffset;
         if (windowBottom >= docHeight) {
           status = 'bottom reached';
         }
         lc.run(() => {
           this.statusText = status;
         });
      };
  }
}
