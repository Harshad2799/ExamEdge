import { Component, Input } from '@angular/core';
import { UserExampageComponent, question } from '../user-exampage/user-exampage.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user-scores',
  
  templateUrl: './user-scores.component.html',
  styleUrls: ['./user-scores.component.css']
})
export class UserScoresComponent {
  sid: string | null = sessionStorage.getItem("StudentId")
  id:number | undefined =this.sid ? parseInt(this.sid):undefined 
  marks: score[]=[]

  constructor(private http:HttpClient){}
  ngOnInit(){
    this.checkscore();  
  }

  checkscore(){
    let url =`http://localhost:8080/result?id=${this.id}`
    this.http.get<any>(url).subscribe(data =>{
      this.marks = data
      console.log(data)
      
    })
  }
}
export class score{
  subject!: String
  score: number |undefined
  level!: String 
}
