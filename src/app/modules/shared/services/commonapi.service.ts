import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonapiService {
  api = environment.apiUrl

  constructor(
    private http:HttpClient
  ) { }

  getAttendanceData(){
    return this.http.get(`${this.api}/attendance`)
  }
}
