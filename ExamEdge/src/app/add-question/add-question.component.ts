import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent {
  detail: questioDetails = new questioDetails()
  constructor(private http: HttpClient){}
  data!:any

  addquestion(){
//     let url = `http://localhost:8080/addquestion`;
//      console.log(this.detail)
//      this.http.post(url, this.detail).subscribe(data => {
//       this.data=data
//       console.log(this.detail)
// }
// )
}
  }



 export class questioDetails{
  question!: String
  option1!: String
  option2!: String
  option3!: String
  option4!: String 
  answer!: String
  level!: String
}
