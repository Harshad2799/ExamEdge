import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})


export class UserRegisterComponent {
  data:any
user: details = new details();
  constructor(private http: HttpClient){}
  registration(){
    let url=`http://localhost:8080/addstudent`
    this.http.post(url,this.user,{responseType:'text'}).subscribe(data => {
      this.data = data;
    })
    console.log(this.user)
    

  }
}

 class details{
  name!: String
  emailId!: String
  password!: String
  phoneNo!: String
  confirmPassword!: String
}
