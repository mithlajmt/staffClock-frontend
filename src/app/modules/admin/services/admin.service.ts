import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private url = environment.apiUrl
  constructor(
    private http: HttpClient,
  ) { }

  recruitEmployee(employeeData:any){
    return this.http.post(`${this.url}/admin/employee`,employeeData)
  }
  getLeaveRequests(){
    return this.http.get(`${this.url}/attendance/leaveRequest`);
  }

  updateLeaveRequest(id:string,status:string):any{
    // return this.http.put(`${this.url}/attendance/leaveRequest/${id}`,{status})
    return this.http.patch(`${this.url}/attendance/leaveRequest`,{status,id});

  }
}
