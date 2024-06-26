import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = `${environment.apiUrl}/auth`
  constructor(
    private http: HttpClient,
  ) { }

  userLogin(data:any){
   return this.http.post(`${this.api}/login`,data)
  }

  userData(){
    return this.http.get(`${this.api}/user`)
  }
}
