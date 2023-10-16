import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserReportComponent } from './user-report/user-report.component';
import { InstructionPsgeComponent } from './instruction-psge/instruction-psge.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {path:"userregister", component:UserRegisterComponent},
  {path:"userlogin", component:UserLoginComponent},
  {path:"userreport",component:UserReportComponent},
  {path: "instruction", component:InstructionPsgeComponent},
  {path: "contactUs", component:ContactUsComponent}
  // {path: "contactus", component: conta}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
