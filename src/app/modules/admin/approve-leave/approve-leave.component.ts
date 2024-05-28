import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
// import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-approve-leave',
  templateUrl: './approve-leave.component.html',
  styleUrls: ['./approve-leave.component.css']
})
export class ApproveLeaveComponent implements OnInit {

  leaveRequests:any=[]
  requestedDates:any=[]

  constructor(
    private api :AdminService
  ){

  }

  toggleExpand(request: any): void {
    request.expanded = !request.expanded; // Toggle the expanded state
  }

  getStatusColor(status: string) {

    switch (status.toLowerCase()) {
      case 'pending':
        return { color: 'green' };
      case 'approved':
        return { color: 'red' };
      case 'declined':
        return { color: 'yellow' };
      default:
        return {};
    }
  }

  ngOnInit(): void {
    this.api.getLeaveRequests().subscribe({
      next:(res:any)=>{
        this.leaveRequests = [...res?.data]   
      console.log(this.leaveRequests);
               },
      error:(err)=>{
        console.log(err);    
      }
    })
    }


    onApprove(id:string){
      this.api.updateLeaveRequest(id,"Approved").subscribe({
        next:(res:any)=>{
          console.log(res);
          alert('leaveApproved successfully')
          this.api.getLeaveRequests().subscribe({
            next:(res:any)=>{
              this.leaveRequests = [...res?.data]   
            console.log(this.leaveRequests);
                     },
            error:(err)=>{
              console.log(err);    
            }
          })
          
        },
        error:(err:any)=>{
          alert('leaveApprove failed')

        }
      })
        }

        onDecline(_id: string){
          this.api.updateLeaveRequest(_id,"denied").subscribe({
            next:(res:any)=>{
              console.log(res);
              alert("Leave request declined successfully")
              this.api.getLeaveRequests().subscribe({
                next:(res:any)=>{
                  this.leaveRequests = [...res?.data]   
                console.log(this.leaveRequests);
                         },
                error:(err)=>{
                  console.log(err);    
                }
              })
            },
            error:(err:any)=>{
              console.log(err);
              alert("Failed to Decline the leave request");
            }
          })
        }
}
