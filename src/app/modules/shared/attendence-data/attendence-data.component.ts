import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { CommonapiService } from '../services/commonapi.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-attendence-data',
  templateUrl: './attendence-data.component.html',
  styleUrls: ['./attendence-data.component.css']
})
export class AttendenceDataComponent implements OnInit, OnDestroy {
  attendenceData: any[]=[]
  keyID='userID';
  private subscription!: Subscription;

  constructor(
    private loading: LoadingService,
    private serv: CommonapiService
  ){}

  ngOnInit(): void {
    this.loading.showLoading();
    this.subscription = this.serv.getAttendanceData().subscribe({
      next: (res: any) => {
        console.log(res);
        this.attendenceData = [...res.attendanceRecords];
        this.loading.hideLoading();
      },
      error: (err: any) => {
        console.log(err);
        this.loading.hideLoading();
      }
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from the observable to prevent memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
