import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { LoadingService } from 'src/app/services/loading.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-data',
  templateUrl: './employees-data.component.html',
  styleUrls: ['./employees-data.component.css']
})
export class EmployeesDataComponent implements OnInit {

  constructor(
    private admin:AdminService,
    private loading:LoadingService,
    private router:Router
  ){}
  employeesData:any[]=[]
  keyID :any='userID'

ngOnInit(): void {
  this.loading.showLoading()
  this.admin.getEmployeeDatas().subscribe({
    next:(res:any)=>{
      this.employeesData = [...res.employees]
      this.loading.hideLoading()
    },
    error:(err)=>{
      console.log(err)
      this.loading.hideLoading()
    }
  })
}

onEmployeeClick(event:any){
  const userID = event;
  this.router.navigate(['/employee', userID]);
}


}
