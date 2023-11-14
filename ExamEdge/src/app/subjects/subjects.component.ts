import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent {
  constructor(private http: HttpClient){}
  subjects: Subject[] = [];


  showSubjects() {
    let url = `http://localhost:8080/allsubjects`;
    this.http.get<Subject[]>(url).subscribe(data => {
      this.subjects = data;
    });
  }

  ngOnInit(): void {
    this.showSubjects();
  }

}

export class Subject{
  name!: String 
  logo!: String
}
