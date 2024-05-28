import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { userService,} from './auth.service'; // Adjust the import path as necessary
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket!: Socket;

  constructor(private userService: userService)
   {
    this.userService.getuserID().subscribe((userID:any) => {
      if (userID && !this.socket) {
        this.initializeSocket(userID);
      }
    });
  }

  private initializeSocket(userID: string) {
    console.log(userID, 'UserID for Socket Connection');
    this.socket = io('http://localhost:3000', {
      auth: { userID }
    });

    this.socket.on('connect', () => {
      console.log('Connected to socket server');
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from socket server');
    });
  }
  onCheckInNotification(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('checkIn', (data) => {
        observer.next(data);
      });
    });
  }

  onCheckOutNotification(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('checkOut', (data) => {
        observer.next(data);
      });
    });
  }

  disconnect() {
    this.socket.disconnect();
  }
}