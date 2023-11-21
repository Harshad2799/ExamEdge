import { Component, Input } from '@angular/core';
import { UserExampageComponent, question } from '../user-exampage/user-exampage.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user-scores',
  
  templateUrl: './user-scores.component.html',
  styleUrls: ['./user-scores.component.css']
})
export class UserScoresComponent {
  sid = sessionStorage.getItem("StudentId")
  
  marks: score[]=[]

  constructor(private http:HttpClient){}
  ngOnInit(){
    this.checkscore();  
  }

  checkscore(){
    let url =`http://localhost:8080/student/result?id=${this.sid}`
    this.http.get<any>(url).subscribe(data =>{
      this.marks = data
      console.log(data)
      
    })
  }
}
export class score{
  subject: subject = new subject();
  mark: number |undefined
  level!: String 
  attempts: number| undefined
}
export class subject{
  name!: String
}

