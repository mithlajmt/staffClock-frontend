import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { LoadingService } from 'src/app/services/loading.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employees-data',
  templateUrl: './employees-data.component.html',
  styleUrls: ['./employees-data.component.css']
})
export class EmployeesDataComponent implements OnInit, OnDestroy {

  constructor(
    private admin: AdminService,
    private loading: LoadingService,
    private router: Router
  ) {}

  employeesData: any[] = [];
  keyID: any = 'userID';
  private subscription!: Subscription;

  ngOnInit(): void {
    this.loading.showLoading();
    this.subscription = this.admin.getEmployeeDatas().subscribe({
      next: (res: any) => {
        this.employeesData = [...res.employees];
        this.loading.hideLoading();
      },
      error: (err) => {
        console.log(err);
        this.loading.hideLoading();
      }
    });
  }

  onEmployeeClick(event: any): void {
    const userID = event;
    this.router.navigate(['admin/employees', userID]);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
