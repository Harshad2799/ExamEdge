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
  data!: any
  id: number | undefined
  subjectlist: Subject[] = [];
  

  addquestion() {

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