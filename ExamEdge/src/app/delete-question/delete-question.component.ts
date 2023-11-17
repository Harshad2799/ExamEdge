import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-question',
  templateUrl: './delete-question.component.html',
  styleUrls: ['./delete-question.component.css']
})
export class DeleteQuestionComponent {
  
  selectedSubject!: String;
  subjectlist: subject[] = [];
  selectedQuestions: any = [];
  name!: String
  questions: any[] = []
  id: number | undefined
  sub: subject =new subject();
  constructor(private http: HttpClient){}
  
  ngOnInit(){
    this.subjectdropdown();
  }
  subjectdropdown() {
    let url = `http://localhost:8080/allsubjects`
    this.http.get<any>(url).subscribe(data => {
      this.subjectlist = data
      console.log(this.subjectlist)
    })
  }
  SubjectSelect() {

    // console.log('Selected Subject:', this.selectedSubject);
   this.selectedQuestions = this.questions.filter(question => question.subject === this.selectedSubject);
    // console.log('Selected Questions:', this.selectedQuestions);
   // let url=`http://localhost:8080/fetchallquestion/${this.id}`
    this.id = this.sub.id
    console.log(this.id)
    //this.http.get(url).subscribe(data =>{

    //})
  }

  onDelete() {
    let url=`http://localhost:8080/deletequestion/{id}`
    this.http.post(url, this.selectedQuestions).subscribe(data =>{
      this.selectedQuestions=data
    })
  }

  onDeleteQuestion(index: number): void {
    alert("Are you sure you want to delete");
    this.selectedQuestions.splice(index, 1);
  }

  
}

export class subject{
  name!: String
  id: number | undefined
}





