import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'student',
  template: '<h1>Student with id : {{id}}</h1>'
})
export class StudentComponent {
  public id:string;

  constructor( private route: ActivatedRoute, private router: Router)  {

  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
       this.id = params['id'];
    });
  }
}
