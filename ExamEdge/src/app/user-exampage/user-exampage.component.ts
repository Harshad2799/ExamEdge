
import { HttpClient } from '@angular/common/http';


import { Component } from '@angular/core';

@Component({
  selector: 'app-user-exampage',
  templateUrl: './user-exampage.component.html',
  styleUrls: ['./user-exampage.component.css']
})
export class UserExampageComponent {


  qustionList: question[] = []
  constructor(private http: HttpClient){}
  ngOnInit(){
    this.allquestions
  }
  allquestions(){
    let url =`http://localhost:8080/fetchquestions?id=3`
    this.http.get<any>(url).subscribe(data => {
      console.log(data)
      this.qustionList = data
    })
  }
}

export class question{
  question!: String
  option1!: String
  option2!: String
  option3!: String
  option4!: String
  answer!: String
  correct!: String
  level!: String 
}
