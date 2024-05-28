import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): Observable<boolean> | boolean {
    const token = localStorage.getItem('authToken');
    if (token) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
