import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AuthModule } from '../auth/auth.module';
import { ApproveLeaveComponent } from './approve-leave/approve-leave.component';
import { EmployeesDataComponent } from './employees-data/employees-data.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';



@NgModule({
  declarations: [
    AdminComponent,
    EmployeeFormComponent,
    ApproveLeaveComponent,
    EmployeesDataComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    AuthModule,

  ]
})
export class AdminModule { }
