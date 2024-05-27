import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { userService } from 'src/app/services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isLoading = true
  isCompany:boolean=false
  isAdmin:boolean=false
  isDepartmentHead:boolean=false
  isEmployee:boolean=false
  companyName:string='';
  role:string=''
  constructor(
    private router:Router ,
    private user:userService,
    private loading:LoadingService,
      ){}

  ngOnInit(): void {
    this.loading.showLoading()
    this.user.getRole().pipe(
      switchMap((role:any) => {
        this.role = role;
        this.setRoles();
        this.loading.hideLoading();
        this.isLoading = false;
        return this.user.getRole();
      })
    ).subscribe();
  }

  setRoles(){
    this.isAdmin = this.role == 'admin'
    this.isEmployee = this.role == 'employee'
  }

  
  logout(){
    localStorage.clear()
    this.router.navigate(['auth/login'])
  }

  navigate(link:string){
    console.log(this.role);
    
    this.router.navigate([`/${this.role}/${link}`]);
  }
}
