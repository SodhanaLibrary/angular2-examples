import { Component } from '@angular/core';

@Component({
  template: `<h1>Teachers list</h1>
    <nav>
      <a routerLink="/teachers/kranthi">kranthi</a>
      <a routerLink="/teachers/kalidas">kalidas</a>
      <a routerLink="/teachers/srirao">srirao</a>
    </nav>`
})
export class TeacherListComponent {
}
