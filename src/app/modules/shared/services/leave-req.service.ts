import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeaveReqService {
  userapi=environment.apiUrl+'/attendance'

  constructor(
    private http: HttpClient,
  ) { }

  registerLeave(leaveRequest:any){
    return this.http.post<any>(`${this.userapi}/leaveRequest`,leaveRequest)
  }

  getLeaveStatus(){
    return this.http.get<any>(`${this.userapi}/leaveRequest`);
  }

}
