import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import { LeaveRequrestFormComponent } from './leave-requrest-form/leave-requrest-form.component';



@NgModule({
  declarations: [
    EmployeeComponent,
    LeaveRequrestFormComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule,
    AuthModule,
  ]
})
export class EmployeeModule { }
