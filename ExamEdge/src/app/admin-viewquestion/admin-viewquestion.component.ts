import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
  constructor(private http: HttpClient, private route: Router){}
  
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
       
       console.log(this.question.questionId)
      console.log(data) 
      this.questionList = data;
      this.question=data;

    });
  }
   onQuestion(){
    let url=`localhost:8080/fetchquestions?id`
    this.http.get<any>(url).subscribe(data =>{
      this.question.questionId=data.questionId
      
    })
  }

  onDelete(id: number){
    let url=`http://localhost:8080/questionstatus?questionId=${id}`
    this.http.get<any>(url).subscribe(data =>{
    console.log(`question with id ${id}`);
    
      
      
    })
    

  }

  onEdit(){
    let url=`http://localhost:8080`
  }

}
export class subject{
  name!: String
  id: number | undefined
}
export class Question{
  questionId!: number
  question!: String
  option1!: String
  option2!: String
  option3!: String
  option4!: String
  answer!: String 
   subject!:String
}