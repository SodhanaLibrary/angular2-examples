import { Component } from '@angular/core';

@Component({
  template: `<h1>Students list</h1>
    <nav>
      <a routerLink="/students/srinivas">srinivas</a>
      <a routerLink="/students/ramesh">ramesh</a>
      <a routerLink="/students/lokesh">lokesh</a>
    </nav>`
})
export class StudentListComponent {
}
