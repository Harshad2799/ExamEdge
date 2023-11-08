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
  
  constructor(private route: Router,private http: HttpClient) { }
  
  login() {
    let url=`http://localhost:8080/student/login`;
    this.http.post(url, this.detail, { responseType: 'text'}).subscribe(data => {
    })
    let c = this.route.navigate(["/user-report"])
    localStorage.setItem("credential",JSON.stringify(c));
    
    console.log(this.detail)
  }
}

export class Detail{
  emailId!: String;
  password!: String;
  msg: String = "invalid Crendentials";
}
