import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private url = environment.apiUrl;
  constructor(
    private http: HttpClient,
  ) { }

  recruitEmployee(employeeData:any){
    return this.http.post(`${this.url}/admin/employee`,employeeData)
  }
}
