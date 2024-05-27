import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';
import { Token } from '@angular/compiler';
import { userService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm!: FormGroup;
  loginData$ = new Subscription()
  Message=''

  constructor(
    private fb:FormBuilder,
    private api:AuthService,
    private user:userService,
    private router:Router,
  ){}
  
  ngOnInit(){
    this.loginForm = this.fb.group({
      userID:['',Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }
  get f() {
    return this.loginForm.controls;
  }
  onSubmit(){
    if (this.loginForm.invalid) {
      return;
    }
     this.loginData$ =  this.api.userLogin(this.loginForm.value).subscribe({
      next:(res:any)=>{
        console.log(res)
        localStorage.setItem('authToken',res.token)
        const token = localStorage.getItem('authToken');
        this.user.setRole(res.role) 
        this.router.navigate([`/${res.role}`]);
      },
      error:(err)=>{
        this.Message = err.error.message
        
      }
    })
  }
  ngOnDestroy(): void {
    this.loginData$.unsubscribe()
  }

}
