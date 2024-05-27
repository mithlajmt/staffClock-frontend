import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeaveReqService } from '../../shared/services/leave-req.service';
import { ConfirmboxService } from '../../shared/services/confirmbox.service';

@Component({
  selector: 'app-leave-requrest-form',
  templateUrl: './leave-requrest-form.component.html',
  styleUrls: ['./leave-requrest-form.component.css']
})
export class LeaveRequrestFormComponent {

leaveFormData!:FormData;
  leaveForm!: FormGroup;
  selectedFile:any;
  leaveRequests:any[]=[]

  constructor(
    private fb: FormBuilder,
    private attendance:LeaveReqService,
    private confirm:ConfirmboxService
    ) {}

  ngOnInit() {
    this.leaveForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      description: [
        '',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(200)
        ]
      ],
      range: this.fb.group({
        start: ['', Validators.required],
        end: ['', Validators.required]
      }),
    });

   this.attendance.getLeaveStatus().subscribe({
      next:(res:any)=>{
        console.log(res);
        
        this.leaveRequests = [...res?.data]   
      },
      error:(err)=>{
        console.log(err);
      }
    })


  }

  onSubmit() {
    const recievedData = this.leaveForm.value
    console.log(recievedData)
  
    this.attendance.registerLeave(recievedData).subscribe({
      next:(res)=>{
        const dialogData = {
          image: 'https://img.freepik.com/free-vector/green-double-circle-check-mark_78370-1749.jpg?t=st=1716797042~exp=1716800642~hmac=a4fd07f24adfaaf3c7211e2f21c0a9ea62f5b8572622905950c872e0ac9edac2&w=740',
          confirmationMessage: 'Leave Request Successfull',
          bodyText: 'leave request seccessfully submitted to admin',
          showConfirmButton:true,
        }
        this.confirm.openDialog(dialogData)
        this.leaveRequests.push(res.data)
        this.leaveForm.reset()
            },
      error:(err)=>{
        console.log(err);   
      }
    })
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


}
