import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  username!: String;
  password!: String;
  msg!: String;
  constructor(private route: Router) { }
  login() {
    if (this.username == 'admin' && this.password == "Harshad@123") {
      this.route.navigate(['admin-reports'])
      localStorage.setItem('admin', JSON.stringify('admin'));
    } else if (this.username == "amit" && this.password == "Amit@123") {
      this.route.navigate(['user-report'])
      localStorage.setItem('user', JSON.stringify('user'))
    } else {
      this.msg = 'Invalid Credentials';
    }
  }
}
