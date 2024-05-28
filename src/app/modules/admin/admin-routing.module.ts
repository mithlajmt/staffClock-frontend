import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from '../shared/dashboard/dashboard.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { CheckInComponent } from '../shared/check-in/check-in.component';
import { ApproveLeaveComponent } from './approve-leave/approve-leave.component';
import { AttendenceDataComponent } from '../shared/attendence-data/attendence-data.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'employee', component: EmployeeFormComponent },
      { path: 'checkIn', component: CheckInComponent },
      { path: 'leaveRequest', component: ApproveLeaveComponent },
      { path: 'attendance', component: AttendenceDataComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
