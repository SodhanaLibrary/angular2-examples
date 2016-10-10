import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <div (click)="selectItem(ind)" [ngClass]="{'menu_item':true, 'menu_hoverItem': (selectedIndex !== ind), 'menu_selectedItem': (selectedIndex === ind) }" *ngFor="let item of items; let ind = index">
      {{item}} 
    </div>
  `
})
export class AppComponent {
  selectedIndex: number = -1;
  items: string[] = ["india", "america", "UK", "France", "Aus"];

  selectItem(index) {
    console.log(index);
    this.selectedIndex = index;
  }
}
