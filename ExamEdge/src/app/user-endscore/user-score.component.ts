import { Component } from '@angular/core';

@Component({
  selector: 'app-user-score',
  templateUrl: './user-score.component.html',
  styleUrls: ['./user-score.component.css']
})
export class UserScoreComponent {
  name!: String
  subjectName!: String
  Marks =sessionStorage.getItem("marks")
  Percentage:number |undefined
  sid = sessionStorage.getItem("StudentId")
  
  noOnInit(){
    this.getdetail
  }
  getdetail(){
    
  }
  


}
