import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-employeeregister',
  templateUrl: './employeeregister.component.html',
  styleUrls: ['./employeeregister.component.css']
})
export class EmployeeregisterComponent implements OnInit {
  attendanceData: any[] = [];
  public keyID: any = 'userID';
  showTable: boolean = false;

  constructor(
    private loading: LoadingService,
    private api: AdminService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loading.showLoading();
    const employeeId = this.route.snapshot.params['id'];

    this.api.getEmployeeAttendance(employeeId).subscribe({
      next: (res: any) => {
        console.log(res);
        this.attendanceData = res.attendanceRecords;
        this.showTable = this.attendanceData.length > 0;
        this.loading.hideLoading();
      },
      error: (err: any) => {
        console.log(err);
        this.loading.hideLoading();
      }
    });
  }
}
