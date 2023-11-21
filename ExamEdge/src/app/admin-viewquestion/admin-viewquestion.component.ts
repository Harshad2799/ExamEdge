import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-viewquestion',
  templateUrl: './admin-viewquestion.component.html',
  styleUrls: ['./admin-viewquestion.component.css']
})
export class AdminViewquestionComponent {

  selectedSubject!: string;
  subjectlist: subject[] = [];
  selectedQuestions: any = [];
  name!: String
  questions: Question[] = []
  id: number | undefined
  questionList: Question [] = []
  question: Question = new Question();
  sub: subject =new subject();
  constructor(private http: HttpClient){}
  
  ngOnInit(){
    this.subjectdropdown();
  }
  subjectdropdown() {
    let url = `http://localhost:8080/allsubjects`
    this.http.get<any>(url).subscribe(data => {
      this.subjectlist = data
      // this.id = data.id
      // console.log(this.id)
      
      console.log(this.subjectlist)
    })
  }
  SubjectSelect() {
    let url = `http://localhost:8080/fetchquestions/subId?id=${this.selectedSubject}`;
    this.http.get<any>(url).subscribe(data => {
      console.log(data);
      data.questionid=this.question.qid
      console.log(this.question.qid) 
      this.questionList = data;
    });
  }
   onQuestion(){
    let url=`localhost:8080/fetchquestions?id`
    this.http.get<any>(url).subscribe(data =>{
      
    })
  }

  onDelete(){
    let url=`http://localhost:8080/questionstatus?id=${this.question.qid}`
    this.http.get(url).subscribe(data =>{
      
    })
  }

}
export class subject{
  name!: String
  id: number | undefined
}
export class Question{
  qid: number|undefined
  question!: String
  option1!: String
  option2!: String
  option3!: String
  option4!: String
  answer!: String 
   subject!:String
}