import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})


export class UserRegisterComponent {
  detail: Detail = new Detail()
  constructor(private http: HttpClient, private route: Router){}
  data!: any
  msg!: String
  registration(){
    let url=`http://localhost:8080/addstudent`;
    this.http.post<any>(url, this.detail).subscribe(data => {
      if(data.status==true){
        this.route.navigate(["/home"])
      }else{
        this.msg = data.messagIfAny;
      }
    })
  }
}

export class Detail{
  name!: String
  emailId!: String
  password!: String
  phoneNo!: String
  confirmPassword!: String
}
