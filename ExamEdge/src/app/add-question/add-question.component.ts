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
  subjects: Subject[] = [];
  
  ngOnInit() {
    this.subjectdropdown();
  }
  subjectdropdown() {
    let url = `http://localhost:8080/allsubjects`
    this.http.get<any>(url).subscribe(data => {
      this.subjects = data
    })
  }
  addquestion() {
    let url = `http://localhost:8080/addquestion`;
    console.log(this.detail)
    this.http.post(url, this.detail).subscribe(data => {
      this.data = data
      console.log('Adding question for Subject ID:', this.id);
      console.log(this.detail)
    })

  }

  onSubjectSelected() {
    // Access the selected subject ID
    console.log(this.id)
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
  subjects: Subject = new Subject();
}

export class Subject {
  name!: String
  id: number | undefined
}
