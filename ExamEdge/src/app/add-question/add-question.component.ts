import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent {
  detail: questioDetails = new questioDetails()
  constructor(private http: HttpClient) { }
  data!: any
  id: number | undefined
  subjectlist: Subject[] = [];
  
  ngOnInit() {
    this.subjectdropdown();
  }

  subjectdropdown() {
    let url = `http://localhost:8080/allsubjects`
    this.http.get<any>(url).subscribe(data => {
      this.subjectlist = data
    })
  }
  addquestion() {
    console.log(this.detail)
    let url = `http://localhost:8080/addquestion`;
    alert(this.id)
    this.detail.subject.id = this.id;
    this.http.post<any>(url, this.detail).subscribe(data => {
      console.log('Adding question for Subject ID:', this.id);
      console.log(this.detail)
    })

    console.log(this.id)

  }

  // onSubjectSelected() {
  //   // Access the selected subject ID
  //   console.log(this.id)
  // }

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
