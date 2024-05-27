import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmboxService {
  constructor() { }

  private dialogDataSubject = new BehaviorSubject<any>({
    image: '',
    confirmationMessage: '',
    bodyText: '',
    showConfirmButton: true,
    showCancelButton: true,
  });

  private isVisibleSubject = new BehaviorSubject<boolean>(false);

  dialogData$ = this.dialogDataSubject.asObservable();
  isVisible$ = this.isVisibleSubject.asObservable();

  openDialog(data: any) {
    this.dialogDataSubject.next(data);
    this.isVisibleSubject.next(true);
  }

  closeDialog() {
    this.isVisibleSubject.next(false);
  }
}
