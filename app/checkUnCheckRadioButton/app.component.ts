import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h4>Click on below buttons to check and uncheck radio buttons</h4>
    <button (click)="gender = 'male'">Select Male</button>
    <button (click)="gender = 'female'" >Select Female</button><br>
    <input type="radio" [(ngModel)]="gender" value="male" name="gender"/> Male<br>
    <input type="radio" [(ngModel)]="gender" value="female" name="gender"/> Female<br>
    <h4>Gender Value</h4>
    <div>{{gender}}</div>
  `
})
export class AppComponent {
  gender: string = 'male';
}
