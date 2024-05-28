import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { userService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeGuard implements CanActivate {

  constructor(private userService: userService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.userService.getRole().pipe(
      map((res: any) => {
        if (res === 'employee') {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      }),
      catchError(() => {
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }
}
