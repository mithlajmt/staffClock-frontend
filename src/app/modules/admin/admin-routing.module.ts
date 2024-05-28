import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from '../shared/dashboard/dashboard.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { CheckInComponent } from '../shared/check-in/check-in.component';
import { ApproveLeaveComponent } from './approve-leave/approve-leave.component';
import { AttendenceDataComponent } from '../shared/attendence-data/attendence-data.component';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeesDataComponent } from './employees-data/employees-data.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeregisterComponent } from './employeeregister/employeeregister.component';
import { AdminGuard } from 'src/app/services/admin-guard.service';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'checkIn', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'employee', component: EmployeeFormComponent },
      { path: 'checkIn', component: CheckInComponent },
      { path: 'leaveRequest', component: ApproveLeaveComponent },
      { path: 'attendance', component: AttendenceDataComponent },
      { path: 'employees', component: EmployeesDataComponent },
      { path: 'employees/:id', component: EmployeeDetailsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
