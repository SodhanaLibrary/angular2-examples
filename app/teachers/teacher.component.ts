import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'teacher',
  template: '<h1>Teacher with id : {{id}}</h1>'
})
export class TeacherComponent {
  public id:string;

  constructor( private route: ActivatedRoute, private router: Router)  {

  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
       this.id = params['id'];
    });
  }
}
