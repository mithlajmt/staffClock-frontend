import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { CheckInComponent } from '../shared/check-in/check-in.component';
import { LeaveRequrestFormComponent } from './leave-requrest-form/leave-requrest-form.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: [
      { path: '', redirectTo: 'checkIn', pathMatch: 'full' },
      { path: 'checkIn', component: CheckInComponent },
      { path: 'leaveRequest', component: LeaveRequrestFormComponent },
      // { path: 'employee', component: EmployeeFormComponent },
    ]
  }
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class EmployeeRoutingModule { }
