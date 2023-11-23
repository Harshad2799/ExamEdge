import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-update-user-detail',
  templateUrl: './update-user-detail.component.html',
  styleUrls: ['./update-user-detail.component.css']
})
export class UpdateUserDetailComponent {
  update: Update = new Update();
  data!: any
  show(){
    console.log(this.update);
  }

  constructor(private http: HttpClient) { }

  // ngOnInit(){
  //   this.getrecord()
  // }

  getrecord(){
    
    let url = `http://localhost:8080/student/update?=${this.update.sid}`;
    console.log(this.update)
    this.http.post(url, this.update, { responseType: 'text'}).subscribe(data => {
      console.log(data)
      this.data = data
  }

  )
}
updaterecord(){

}

}




export class Update{
  sid=sessionStorage.getItem("StudentId")
  name!: String
  emailId!: String
  password!: String
  phoneNo: number=0
}

