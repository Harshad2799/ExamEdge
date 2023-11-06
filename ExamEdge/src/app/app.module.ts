import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserReportComponent } from './user-report/user-report.component';
import { InstructionPsgeComponent } from './instruction-psge/instruction-psge.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { DeleteQuestionComponent } from './delete-question/delete-question.component';
import { AdminreportComponent } from './admin-report/adminreport.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminStudentReportsComponent } from './admin-student-reports/admin-student-reports.component';
import { AddsubjectComponent } from './addsubject/addsubject.component';
import { UpdateUserDetailComponent } from './update-user-detail/update-user-detail.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    UserRegisterComponent,
    UserLoginComponent,
    UserReportComponent,
    InstructionPsgeComponent,
    ContactUsComponent,
    SubjectsComponent,
    HomepageComponent,
    ForgetpasswordComponent,
    AddQuestionComponent,
    DeleteQuestionComponent,
    AdminreportComponent,
    AdminStudentReportsComponent,
    AddsubjectComponent,
    UpdateUserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
