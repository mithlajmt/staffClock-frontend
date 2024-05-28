import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { CheckInComponent } from '../shared/check-in/check-in.component';
import { LeaveRequrestFormComponent } from './leave-requrest-form/leave-requrest-form.component';
import { AttendenceDataComponent } from '../shared/attendence-data/attendence-data.component';
import { EmployeeGuard } from 'src/app/services/employee-guard.service';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: [
      { path: '', redirectTo: 'checkIn', pathMatch: 'full' },
      { path: 'checkIn', component: CheckInComponent },
      { path: 'leaveRequest', component: LeaveRequrestFormComponent },
      { path: 'attendance', component: AttendenceDataComponent },
    ]
  }
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class EmployeeRoutingModule { }
