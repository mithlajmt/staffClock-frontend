import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { ConfirmboxService } from '../../shared/services/confirmbox.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  reactiveForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private admin:AdminService,
    private confirm:ConfirmboxService,
    private loading:LoadingService
  ) {}

  ngOnInit() {
    this.reactiveForm = this.fb.group({
      employeeName: ['', [Validators.required, Validators.minLength(2)]],
      gender: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      salary: ['', [Validators.required, Validators.minLength(2)]],
      contactEmail: ['', [Validators.required, Validators.email]],
      jobTitle: ['', [Validators.required, Validators.minLength(2)]],
      dateOfBirth: ['', Validators.required],
    });
  }

  onSubmit() {
    const formData = this.reactiveForm.value
    if (this.reactiveForm.valid) {
      this.loading.showLoading()

      this.admin.recruitEmployee(formData).subscribe({
        next:(res)=>{
          this.loading.hideLoading()
          const dialogData = {
            image: 'https://img.freepik.com/free-vector/green-double-circle-check-mark_78370-1749.jpg?t=st=1716797042~exp=1716800642~hmac=a4fd07f24adfaaf3c7211e2f21c0a9ea62f5b8572622905950c872e0ac9edac2&w=740',
            confirmationMessage: 'Employee Added Successfully',
            bodyText: 'employeeID and Temporary pass shared to employee email',
            showConfirmButton:true,
          }
          this.confirm.openDialog(dialogData);
          this.reactiveForm.reset()

          console.log(res)
        },
        error:(err)=>{
          this.loading.hideLoading()
          console.log(err)
          const dialogData = {
            image: 'https://img.freepik.com/free-vector/red-triangle-warning-sign-vector-art-illustration_56104-865.jpg?t=st=1716797233~exp=1716800833~hmac=78641f1e461d87ee30e77159c034df78bfc352fea212eea387d3be0529647ad4&w=900',
            confirmationMessage: 'Recruitment Failed',
            bodyText: err.error.message,
            showConfirmButton:true,
          }
          this.confirm.openDialog(dialogData);
        }
      })

    }
  }

  // Getters for form controls
  get employeeName() {
    return this.reactiveForm.get('employeeName');
  }

  get gender() {
    return this.reactiveForm.get('gender');
  }

  get contactNumber() {
    return this.reactiveForm.get('contactNumber');
  }

  get salary() {
    return this.reactiveForm.get('salary');
  }

  get contactEmail() {
    return this.reactiveForm.get('contactEmail');
  }

  get jobTitle() {
    return this.reactiveForm.get('jobTitle');
  }

  get dateOfBirth() {
    return this.reactiveForm.get('dateOfBirth');
  }

  onConfirm(){
  }
}
