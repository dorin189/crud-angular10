import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeesComponent} from './containers/employees/employees.component';
import {EditComponent} from './containers/employees/edit/edit.component';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeesComponent
  },
  {
    path: 'employees/edit/:id',
    component: EditComponent
  },
  {
    path: '**',
    redirectTo: 'employees'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
