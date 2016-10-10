import { Component } from '@angular/core';
import { NgZone } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div [ngClass]="{'header_nav':true, 'header_nav--big':!isShrunk, 'header_nav--small':isShrunk}">nav here</div>
  `
})
export class AppComponent {
  isShrunk: boolean = false;

  constructor(zone: NgZone) {
    window.onscroll = () => {
      zone.run(() => {
        if(window.pageYOffset > 0) {
             this.isShrunk = true;
        } else {
             this.isShrunk = false;
        }
      });
    }
  }

}
