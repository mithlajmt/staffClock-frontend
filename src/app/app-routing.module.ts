import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './modules/auth/notfound/notfound.component';
import { authGuard } from './services/authguard.service';

const routes: Routes = [
  {path:'',redirectTo:'auth',pathMatch:'full'},
  {path:'auth',loadChildren:()=>import('./modules/auth/auth.module').then(m=>m.AuthModule)},
  {path:'admin',loadChildren:()=>import('./modules/admin/admin.module').then(m=>m.AdminModule)},
  {path:'employee',loadChildren:()=>import('./modules/employee/employee.module').then(m=>m.EmployeeModule)},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
