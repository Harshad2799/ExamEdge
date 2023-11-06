import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserReportComponent } from './user-report/user-report.component';
import { InstructionPsgeComponent } from './instruction-psge/instruction-psge.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { DeleteQuestionComponent } from './delete-question/delete-question.component';
import { AdminreportComponent } from './admin-report/adminreport.component';
import { AdminStudentReportsComponent } from './admin-student-reports/admin-student-reports.component';
import { UpdateUserDetailComponent } from './update-user-detail/update-user-detail.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path:"register", component:UserRegisterComponent},
  {path:"login", component:UserLoginComponent},
  {path:"user-report",component:UserReportComponent},
  {path: "user-instruction", component:InstructionPsgeComponent, canActivate:[authGuard] },
  {path: "contactUs", component:ContactUsComponent},
  {path: "", component:HomepageComponent},
  {path: "user-subject", component:SubjectsComponent , canActivate:[authGuard]},
  {path:"forget", component:ForgetpasswordComponent},
  {path: "admin-addquestion", component:AddQuestionComponent},
  {path: "admin-deletequestion", component: DeleteQuestionComponent},
  {path: "admin-report", component: AdminreportComponent},
  {path: "admin-reports", component:AdminStudentReportsComponent},
  {path: "user-update", component:UpdateUserDetailComponent , canActivate:[authGuard]}

  // {path: "contactus", component: conta}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
