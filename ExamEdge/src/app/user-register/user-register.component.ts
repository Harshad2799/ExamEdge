import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import {HttpClient} from '@angular/common/http';

import { Router } from '@angular/router';


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

  detail: Detail = new Detail()
  constructor(private http: HttpClient, private route: Router){}
  data!: any
  msg!: String
  file: File | undefined;
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

  handleFileInput(event: any): void {
    this.file = event.target.files[0];
  }
}




export class Detail{

  name!: String
  emailId!: String
  password!: String
  phoneNo!: String
  confirmPassword!: String

  profileImageUrl!: String

}
