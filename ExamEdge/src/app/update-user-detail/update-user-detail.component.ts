import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-update-user-detail',
  templateUrl: './update-user-detail.component.html',
  styleUrls: ['./update-user-detail.component.css']
})
export class UpdateUserDetailComponent {
  update: Update = new Update();
  show(){
    console.log(this.update);
  }

  constructor(private http: HttpClient) { }

  updaterecord(){
    
    // let url = `http://localhost:8080/updaterecord/${this.update.id}`;
    console.log(this.update)
    // this.http.post(url, this.update, { responseType: 'text'}).subscribe(data => {
  }
}
// }




export class Update{
  id: number=0
  name!: String
  emailId!: String
  password!: String
  phoneNo: number=0
}

