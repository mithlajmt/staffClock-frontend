import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class userService {
  private api=environment.apiUrl;
  private roleSubject  = new BehaviorSubject<string>('')
  public role$=this.roleSubject.asObservable()

  private useridSubject  = new BehaviorSubject<string>('')
  public userid$=this.useridSubject.asObservable()

  constructor(
    private http:HttpClient
  ) {}

  setRole(role:string){
    this.roleSubject.next(role)
  }
  setuserID(userID:string){
    this.useridSubject.next(userID)
  }
  
  getRole(): Observable<string> {
    return this.role$;
  }
  getuserID(): Observable<string> {
    return this.userid$;
  }

}
