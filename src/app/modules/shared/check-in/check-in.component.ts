import { Component, OnInit } from '@angular/core';
import { CheckInService } from '../services/check-in.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ConfirmboxService } from '../services/confirmbox.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {
  onBreak!:boolean
  api=environment.apiUrl
  buttonText = 'Check In';
  elapsedTime: string = "00:00:00";
  showCheckedIn!:boolean

  constructor(
    private checkinService: CheckInService,
    private loading: LoadingService,
    private confirm:ConfirmboxService,
    private http:HttpClient,
  ) { }

  ngOnInit(): void {
   this.getStatus()

    this.checkinService.elapsedTime$.subscribe(elapsedTime => {
      this.elapsedTime = elapsedTime;

      if(elapsedTime === '00:00:00'){
        
        this.loading.hideLoading()
      }else{

      }
      
    });
  }

  getStatus(){
    this.http.get(`${this.api}/attendance/status`).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.showCheckedIn = res.showCheckedIn
        this.onBreak = res.onBreak
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }


  onCheckIn(): void {
    this.checkinService.checkin();
    this.getStatus()
    // this.loading.showLoading();
  }
  onCheckout(){
    this.http.post(`${this.api}/attendance/checkOut`, {}).subscribe({
      next: (res: any) => {
        const dialogData = {
          image: 'https://img.freepik.com/free-vector/red-triangle-warning-sign-vector-art-illustration_56104-865.jpg?t=st=1716797233~exp=1716800833~hmac=78641f1e461d87ee30e77159c034df78bfc352fea212eea387d3be0529647ad4&w=900',
          confirmationMessage: 'checkout Successfull',
          bodyText: res.message,
          showConfirmButton:true,
        }
        // this.loading.isCheckedOut= true
        this.checkinService.clearCheckinTime()
        this.confirm.openDialog(dialogData);
        const checkinTime = new Date(res.checkInTime);
        this.checkinService.checkinTimeSubject.next(checkinTime);
        this.loading.hideLoading()
      },
      error: (err) => {
        this.loading.hideLoading();
        console.log(err);
        const dialogData = {
          image: 'https://img.freepik.com/free-vector/red-triangle-warning-sign-vector-art-illustration_56104-865.jpg?t=st=1716797233~exp=1716800833~hmac=78641f1e461d87ee30e77159c034df78bfc352fea212eea387d3be0529647ad4&w=900',
          confirmationMessage: 'checkout failed',
          bodyText:err.error.message,
          showConfirmButton:true,
        }
        this.confirm.openDialog(dialogData);
      }
    });
  }
  
  onConfirm(){
  }

  onBreakClick(){
    this.http.patch(`${this.api}/attendance/break`,{}).subscribe({
        next: (res: any) => {
          console.log(res);
          this.getStatus()

        },
        error:(err)=>{
          console.log(err)
          const dialogData = {
            image: 'https://img.freepik.com/free-vector/red-triangle-warning-sign-vector-art-illustration_56104-865.jpg?t=st=1716797233~exp=1716800833~hmac=78641f1e461d87ee30e77159c034df78bfc352fea212eea387d3be0529647ad4&w=900',
            confirmationMessage: 'cant take Break',
            bodyText:err.error.message,
            showConfirmButton:true,
          }
          this.confirm.openDialog(dialogData);
        }
      })
  }
}