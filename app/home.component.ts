import { Component } from '@angular/core';
@Component({
  template: `<nav>
      <a routerLink="/students" routerLinkActive="active">Students</a>
      <a routerLink="/teachers" routerLinkActive="active">Teachers</a>
      <a routerLink="/admin" routerLinkActive="active">Admin</a>
    </nav>`
})
export class HomeComponent { }
