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
      // alert(this.data)
      if(this.data.status== true){
        let c = this.route.navigate(["/user-report"])
        sessionStorage.setItem("credential",JSON.stringify(c));
        
        // console.log(c)
        // console.log(this.detail)
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
