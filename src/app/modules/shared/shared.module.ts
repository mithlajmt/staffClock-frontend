import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { CheckInComponent } from './check-in/check-in.component';
import { AuthModule } from '../auth/auth.module';



@NgModule({
  declarations: [
    SidebarComponent,
    DashboardComponent,
    NavbarComponent,
    ConfirmationDialogComponent,
    CheckInComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    AuthModule,
  ],
  exports:[SidebarComponent,NavbarComponent,ConfirmationDialogComponent,CheckInComponent],
})
export class SharedModule { }
