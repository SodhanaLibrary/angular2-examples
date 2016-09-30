import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './students/student.component';
import { StudentListComponent } from './students/studentList.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

const appRoutes: Routes = [
  {
    path: 'students',
    component: StudentsComponent,
    children: [
      {
        path:'',
        component : StudentListComponent
      },
      {
        path: ':id',
        component : StudentComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
