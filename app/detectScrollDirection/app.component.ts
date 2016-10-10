import { Component, Inject} from '@angular/core';
import { NgZone } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div style="position:fixed;top:0px;padding:10px;border:1px solid #ccc;">Scroll direction :  <strong>{{direction}}</strong> </div>
  <div style="height:1000px;margin-top:50px;padding:10px;border:1px solid #ccc;">
  Scroll down and up, observe the direction
  </div>
  <br/>
  <h3>bottom</h3>
  `
})
export class AppComponent {
  lastScrollTop: number = 0;
  direction: string = "";

  constructor(lc: NgZone) {
     window.onscroll = () => {
        let st = window.pageYOffset;
        let dir = '';
        if (st > this.lastScrollTop) {
            dir = "down";
        } else {
            dir = "up";
        }
        this.lastScrollTop = st;
        lc.run(() => {
          this.direction = dir;
        });
      };
  }
}
