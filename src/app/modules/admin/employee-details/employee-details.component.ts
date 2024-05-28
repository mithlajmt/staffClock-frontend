import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { LoadingService } from 'src/app/services/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit, OnDestroy {
  attendanceData: any[] = [];
  employeeData: any;
  isEditFormVisible: boolean = false;
  private subscriptions: Subscription[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private admin: AdminService,
    private router: Router,
    private loading: LoadingService
  ) { }

  ngOnInit(): void {
    this.loading.showLoading();

    const employeeId = this.activatedRoute.snapshot.params['id'];

    const sub1 = this.admin.getFullEmployeeData(employeeId).subscribe({
      next: (res: any) => {
        this.employeeData = res.data;
        this.loading.hideLoading();
      },
      error: (err: any) => {
        console.log(err);
        alert(err.error.message);
        this.loading.hideLoading();
      }
    });

    this.subscriptions.push(sub1);
  }

  onDelete(): void {
    const employeeId = this.activatedRoute.snapshot.params['id'];

    console.log(`Deleting employee with ID: ${employeeId}`); // Add this line to log the employee ID

    this.loading.showLoading();

    const sub2 = this.admin.deletingEmployee(employeeId).subscribe({
      next: (res: any) => {
        console.log(res);
        this.loading.hideLoading();
        this.router.navigate(['/employees']); // Navigate back to employee list after deletion
      },
      error: (err: any) => {
        console.log(err);
        // alert(err.error.message);
        this.loading.hideLoading();
      }
    });

    this.subscriptions.push(sub2);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}