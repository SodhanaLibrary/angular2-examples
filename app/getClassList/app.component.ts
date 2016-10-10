import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h2>Set Class List Of Element</h2>
  <div>
    <button class="btn btn1 btn2" (click)="getClassList($event)">
       Get Class List
    </button>
  </div>
  <br/><br/>
  <div>
    <h3>{{classList}}</h3>
  </div>
  `
})
export class AppComponent {
  classList: string[] = [];

  getClassList($event) {
      this.classList = $event.target.className.split(/\s+/);
      for (let i = 0; i < this.classList.length; i++) {
        if (this.classList[i] === 'someClass') {
          //do something
        }
      }
  }
}
