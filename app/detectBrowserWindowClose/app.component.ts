import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h4>Enter Text in below Input Field and Try to close Window</h4>
  <input (ngModelChange)="setConfirmUnload(true)" [(ngModel)]="data"/><br>
  <br/>
  <button (click)="saveData()">Save Data</button>
  <br/>
  <div>{{data1}}</div>
  `
})
export class AppComponent {
  data: string = '';
  data1: string = '';

  setConfirmUnload(on) {
	    window.onbeforeunload = (on) ? this.unloadMessage : null;
	}

	unloadMessage() {
	    return "You have unsaved changes";
	}

	saveData() {
	    this.data1 = this.data;
	    this.setConfirmUnload(false);
	}

}
