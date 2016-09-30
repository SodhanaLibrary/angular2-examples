import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachersComponent } from './teachers.component';
import { TeacherListComponent } from './teacherList.component';
import { TeacherComponent } from './teacher.component';

const appRoutes: Routes = [
  {
    path: 'teachers',
    component: TeachersComponent,
    children: [
      {
        path:':id',
        component:TeacherComponent
      },
      {
        path:'',
        component:TeacherListComponent
      }
    ]
  }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
