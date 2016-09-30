import { NgModule }      from '@angular/core';
import { routing,
         appRoutingProviders }  from './teachers.routing';

import { TeachersComponent } from './teachers.component';
import { TeacherComponent } from './teacher.component';
import { TeacherListComponent } from './teacherList.component';

@NgModule({
  imports:      [ routing ],
  declarations: [ TeachersComponent, TeacherComponent, TeacherListComponent ],
  providers:    [ appRoutingProviders ]
})
export class TeachersModule { }
