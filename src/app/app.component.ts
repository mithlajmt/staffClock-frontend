import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { userService } from './services/auth.service';
import { AuthService } from './modules/auth/services/auth.service';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private userService: userService,
    private loading:LoadingService,
  ) {}

  ngOnInit(): void {
    this.loading.showLoading()
    this.authService.userData().subscribe({
      next: (res: any) => {
        this.userService.setRole(res.data.role);
        this.loading.hideLoading()
      },
      error: (err) => {
        console.log(err);
        this.loading.hideLoading()
      }
    });
  }
  }
