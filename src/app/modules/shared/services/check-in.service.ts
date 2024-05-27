import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { LoadingService } from 'src/app/services/loading.service';
import { environment } from 'src/environments/environment';
import { ConfirmboxService } from './confirmbox.service';

@Injectable({
  providedIn: 'root'
})
export class CheckInService {
  storedCheckinTime: any;
  api = environment.apiUrl;
  private checkinTimeSubject = new BehaviorSubject<Date | null>(null);
  checkinTime$ = this.checkinTimeSubject.asObservable();

  elapsedTime$: Observable<string>;

  constructor(
    private http: HttpClient,
    private loading: LoadingService,
    private confirm:ConfirmboxService,
  ) {
    this.loadCheckinTime();
    this.elapsedTime$ = this.checkinTime$.pipe(
      switchMap(checkinTime => {
        if (checkinTime) {
          return interval(1000).pipe(
            map(() => {
              const now = new Date();
              const elapsed = now.getTime() - checkinTime.getTime();
              return this.formatElapsedTime(elapsed);
            })
          );
        } else {
          return interval(1000).pipe(
            map(() => '00:00:00')
          );
        }
      })
    );
  }

  checkin(): void {
    this.loading.showLoading()
    this.http.post(`${this.api}/attendance/checkIn`, {}).subscribe({
      next: (res: any) => {
        const dialogData = {
          image: 'https://img.freepik.com/free-vector/red-triangle-warning-sign-vector-art-illustration_56104-865.jpg?t=st=1716797233~exp=1716800833~hmac=78641f1e461d87ee30e77159c034df78bfc352fea212eea387d3be0529647ad4&w=900',
          confirmationMessage: 'checkIn successfull',
          bodyText: res.message,
          showConfirmButton:true,
        }
        this.confirm.openDialog(dialogData);
        const checkinTime = new Date(res.checkInTime);
        this.checkinTimeSubject.next(checkinTime);
        this.loading.hideLoading()
      },
      error: (err) => {
        this.loading.hideLoading();
        console.log(err);
        const dialogData = {
          image: 'https://img.freepik.com/free-vector/red-triangle-warning-sign-vector-art-illustration_56104-865.jpg?t=st=1716797233~exp=1716800833~hmac=78641f1e461d87ee30e77159c034df78bfc352fea212eea387d3be0529647ad4&w=900',
          confirmationMessage: 'checkIn failed',
          bodyText:err.error.message,
          showConfirmButton:true,
        }
        this.confirm.openDialog(dialogData);
      }
    });
  }

  private loadCheckinTime(): void {
    this.loading.showLoading()
    this.http.get(`${this.api}/attendance/checkIn`).subscribe({
      next: (res: any) => {
        this.storedCheckinTime = res.checkInTime;
        
        // Update check-in time subject
        if (this.storedCheckinTime) {
          const checkinTime = new Date(this.storedCheckinTime);
          this.checkinTimeSubject.next(checkinTime);
        }
        this.loading.hideLoading();
      },
      error: (err) => {
        this.loading.hideLoading();
        console.log(err);
      }
    });
  }

  clearCheckinTime(): void {
    localStorage.removeItem('checkinTime');
    this.checkinTimeSubject.next(null);
  }

  private formatElapsedTime(milliseconds: number): string {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  private pad(num: number): string {
    return num.toString().padStart(2, '0');
  }
}
