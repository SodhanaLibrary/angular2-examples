import { Component } from '@angular/core';
import { NgZone } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
   <h4>Type something in below text box</h4>
   <input (ngModelChange)="displayName()" [(ngModel)]="name"/>
   <h4>Value : {{name1}} </h4>
  `
})
export class AppComponent {
   name: string = '';
   name1: string = '';
   _timeout: any = null;

   constructor(public lc: NgZone) {

   }

   displayName() {
     this._timeout  = null;
     if(this._timeout){ //if there is already a timeout in process cancel it
       window.clearTimeout(this._timeout);
     }
     this._timeout = window.setTimeout(() => {
        this._timeout = null;
        this.lc.run(() => this.name1 = this.name);
     },1000);
  }
}
