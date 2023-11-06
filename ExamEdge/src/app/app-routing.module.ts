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
<<<<<<< HEAD
import { UserScoresComponent } from './user-scores/user-scores.component';
import { UserExampageComponent } from './user-exampage/user-exampage.component';
=======
import { UpdateUserDetailComponent } from './update-user-detail/update-user-detail.component';
import { authGuard } from './auth.guard';
>>>>>>> cdc5026702cf1f2a2cca42b04b67be11bf247ba4

const routes: Routes = [
  {path:"register", component:UserRegisterComponent},
  {path:"login", component:UserLoginComponent},
  {path:"user-report",component:UserReportComponent},
  {path: "user-instruction", component:InstructionPsgeComponent, canActivate:[authGuard] },
  {path: "contactUs", component:ContactUsComponent},
  {path: "", component:HomepageComponent},
  {path: "user-subject", component:SubjectsComponent , canActivate:[authGuard]},
  {path:"forget", component:ForgetpasswordComponent},
<<<<<<< HEAD
  {path: "addquestion", component:AddQuestionComponent},
  {path: "deletequestion", component: DeleteQuestionComponent},
  {path: "adminreport", component: AdminreportComponent},
  {path: "reports", component:AdminStudentReportsComponent},
  {path: "scores", component:UserScoresComponent},
  {path: "exampage", component:UserExampageComponent}
=======
  {path: "admin-addquestion", component:AddQuestionComponent},
  {path: "admin-deletequestion", component: DeleteQuestionComponent},
  {path: "admin-report", component: AdminreportComponent},
  {path: "admin-reports", component:AdminStudentReportsComponent},
  {path: "user-update", component:UpdateUserDetailComponent , canActivate:[authGuard]}
>>>>>>> cdc5026702cf1f2a2cca42b04b67be11bf247ba4

  // {path: "contactus", component: conta}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
