import { Component, Inject} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div style="height:1000px;padding:10px;border:1px solid #ccc;">
  Scroll page, stop the scroll and find the alert
  </div>
  <br/>
  <h3>bottom</h3>
  `
})
export class AppComponent {
  _timeout: any = null;

  constructor() {
    this._timeout  = null;
    window.onscroll = () => {
        if(this._timeout){ //if there is already a timeout in process cancel it
          window.clearTimeout(this._timeout);
        }
        this._timeout = setTimeout(() => {
          this._timeout = null;
          alert('scroll stopped');
        },1000);
    };
  }
}
