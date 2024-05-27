import { Component, OnInit } from '@angular/core';
import { CheckInService } from '../services/check-in.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {
  buttonText = 'Check In';
  elapsedTime: string = "00:00:00";

  constructor(
    private checkinService: CheckInService,
    private loading: LoadingService
  ) { }

  ngOnInit(): void {
    this.checkinService.elapsedTime$.subscribe(elapsedTime => {
      this.elapsedTime = elapsedTime;
    });
  }


  onCheckIn(): void {
    this.checkinService.checkin();
    this.loading.showLoading();
  }
  
  onConfirm(){
  }
}