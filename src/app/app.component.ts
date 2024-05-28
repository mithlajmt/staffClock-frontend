import { Component, OnInit } from '@angular/core';
import { AuthService } from './modules/auth/services/auth.service';
import { userService } from './services/auth.service';
import { LoadingService } from './services/loading.service';
import { SocketService } from './services/socket.service';
import { Router } from '@angular/router'; // Import Router from @angular/router

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  checkInMessage: any;
  checkOutMessage: any;

  constructor(
    private authService: AuthService,
    private userService: userService,
    private loading: LoadingService,
    private socket: SocketService,
    private router: Router, 
  ) {}

  ngOnInit(): void {
    this.loading.showLoading();
    this.authService.userData().subscribe({
      next: (res: any) => {
        this.userService.setRole(res.data.role);
        this.userService.setuserID(res.data.userID);
        this.loading.hideLoading();

        this.socket.onCheckInNotification().subscribe(notification => {
          this.checkInMessage = notification;
          alert(`Check-in notification received: ${notification.message}`);
          // Optionally, use Angular Material Snackbar or other UI elements to show the notification
        });

        this.socket.onCheckOutNotification().subscribe(notification => {
          this.checkOutMessage = notification;
          alert(`Check-out notification received: ${notification.message}`);
          // Optionally, use Angular Material Snackbar or other UI elements to show the notification
        });
      },
      error: (err) => {
        console.log(err);
        this.loading.hideLoading();
        if (err.status === 401) {
          // Token expired, clear authToken and navigate to login page
          localStorage.removeItem('authToken');
        }

      }
    });
  }
}