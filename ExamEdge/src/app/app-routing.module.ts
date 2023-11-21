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
import { UserScoresComponent } from './user-scores/user-scores.component';
import { UserExampageComponent } from './user-exampage/user-exampage.component';
import { UpdateUserDetailComponent } from './update-user-detail/update-user-detail.component';
import { authGuard } from './auth.guard';
import { UserScoreComponent } from './user-endscore/user-score.component';



const routes: Routes = [
  {path:"register", component:UserRegisterComponent},
  {path:"login", component:UserLoginComponent},
  {path:"user-report",component:UserReportComponent},
  {path: "user-instruction", component:InstructionPsgeComponent},
  {path: "contactUs", component:ContactUsComponent},
  {path: "home", component:HomepageComponent},
  {path: "user-subject", component:SubjectsComponent },
  {path:"forget", component:ForgetpasswordComponent},
  {path: "addquestion", component:AddQuestionComponent},
  {path: "deletequestion", component: DeleteQuestionComponent},
  {path: "adminreport", component: AdminreportComponent},
  {path: "reports", component:AdminStudentReportsComponent},
  {path: "exampage", component:UserExampageComponent},
  {path: "admin-addquestion", component:AddQuestionComponent},
  {path: "admin-deletequestion", component: DeleteQuestionComponent},
  {path: "admin-report", component: AdminreportComponent},
  {path: "admin-reports", component:AdminStudentReportsComponent},
  {path: "user-update", component:UpdateUserDetailComponent },
  {path:"user-score", component:UserScoresComponent},
  {path:"user-exampage", component:UserExampageComponent},
  {path:"user-scores", component:UserScoreComponent}


  // {path: "contactus", component: conta}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
