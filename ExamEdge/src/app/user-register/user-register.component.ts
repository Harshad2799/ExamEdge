import { Component } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  name!: String
  email!: String
  password!: String
  phone_No!: String
  confirmPassword!: String

  registration(){
    

  }
}
