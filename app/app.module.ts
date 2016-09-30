import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing,
         appRoutingProviders }  from './app.routing';

import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './students/student.component';
import { StudentListComponent } from './students/studentList.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

import { TeachersModule } from './teachers/teachers.module';

@NgModule({
  imports:      [ BrowserModule, routing, TeachersModule ],
  declarations: [ AppComponent, StudentsComponent, StudentComponent, StudentListComponent, AdminComponent, HomeComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ appRoutingProviders ]
})
export class AppModule { }
