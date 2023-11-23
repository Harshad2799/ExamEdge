import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Question } from '../admin-viewquestion/admin-viewquestion.component';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent {
  constructor(private http: HttpClient){}
  subjects: Subject[] = [];
  questions: Question[]=[];


  showSubjects() {
    let url = `http://localhost:8080/allsubjects`;
    this.http.get<Subject[]>(url).subscribe(data => {
      this.subjects = data;
    });
  }
  showQuestion(id:number,level:String){
    let url=`htpp://localhost:8080/fetchquestions?id=${id}&level=${level}`
    this.http.get<any>(url).subscribe(data =>{
      this.questions= data
    })
  }

  ngOnInit(): void {
    this.showSubjects();
  }

}

export class Subject{
  name!: String 
  logo!: String
}
