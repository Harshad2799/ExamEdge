import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

 detail: Detail= new Detail()
  data!: any
  messageIfAny!: String
  constructor(private route: Router,private http: HttpClient) { }
  
  login() {
    let url=`http://localhost:8080/student/login`;
    this.http.post<any>(url, this.detail).subscribe(data => {
      this.data = data;
      
      if(this.detail.emailId == "Admin" && this.detail.password =="Admin@123"){
        this.route.navigate(["/admin-report"])
      }
      else if(this.data.status== true){
        let c = this.route.navigate(["/user-report"])
        console.log(data)
        sessionStorage.setItem("EmailId", data.emailId);
        sessionStorage.setItem("StudentId", data.sid)
        }else{
          this.detail.msg = data.messageIfAny;
          this.route.navigate(["/login"])
        }
    })
    
  }
}



export class Detail{
  emailId!: String;
  password!: String;
  msg!: String ;
}
