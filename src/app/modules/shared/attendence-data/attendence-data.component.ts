import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { CommonapiService } from '../services/commonapi.service';

@Component({
  selector: 'app-attendence-data',
  templateUrl: './attendence-data.component.html',
  styleUrls: ['./attendence-data.component.css']
})
export class AttendenceDataComponent implements OnInit {
  attendenceData: any;
  keyID:any
  constructor(
    private loading:LoadingService,
    private serv:CommonapiService
  ){}

  ngOnInit(): void {
    this.loading.showLoading()
    this.serv.getAttendanceData().subscribe({
      next:(res:any)=>{console.log(res)
        this.attendenceData = [...res.attendanceRecords]
        this.loading.hideLoading();
      },
      error:(err:any)=>{
        console.log(err)
        this.loading.hideLoading()
      }
    })
  }
}
