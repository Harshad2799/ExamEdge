import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-editpage',
  templateUrl: './admin-editpage.component.html',
  styleUrls: ['./admin-editpage.component.css']
})
export class AdminEditpageComponent {
  detail: questioDetails = new questioDetails()
  constructor(private http: HttpClient) { }
  data: any
  id = sessionStorage.getItem("questionId")
  subjectlist: Subject[] = [];
  questiondata: questioDetails[]=[];
  
  ngOnInit(){
    this.onEdit();
  }
  
  addquestion() {
    // let url=`http://localhost:8080/fetchquesbyid/QuestionId=${this.id}`
    console.log(this.data)
    this.data =sessionStorage.getItem("QuestionId")
  }

  onEdit(){
    let url=`http://localhost:8080/fetchquesbyid?questionId=${this.id}` 
    this.http.get<any>(url).subscribe(data =>{
      this.questiondata=data
      console.log(this.questiondata)
      const selectedQuestionId = data[0].questionId;
      console.log(data)
      // this.question.questionId = 
      console.log(data.questionId)
    })
  }
}
export class questioDetails {
  question!: String
  option1!: String
  option2!: String
  option3!: String
  option4!: String
  answer!: String
  level!: String
  subject: Subject = new Subject();
}

export class Subject {
  name!: String
  id: number | undefined
}