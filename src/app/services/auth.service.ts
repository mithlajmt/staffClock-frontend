import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class userService {
  private api=environment.apiUrl;
  public role=''

  constructor() {}


}