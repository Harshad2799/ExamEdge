import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instruction-psge',
  templateUrl: './instruction-psge.component.html',
  styleUrls: ['./instruction-psge.component.css']
})
export class InstructionPsgeComponent {


  constructor(private http: HttpClient,private route: Router){}
  startexam(){
this.route.navigate(["/user-exampage"])


  }

  // qustionList: question[] = []
  // 
  // ngOnInit(){
  //   this.allquestions
  // }
  // allquestions(){
  //   let url =`http://localhost:8080/fetchquestions?id=3`
  //   this.http.get<any>(url).subscribe(data => {
  //     console.log(data)
  //     this.route.navigate(["/user-exampage"])
  //     this.qustionList = data
  //   })
  // }
}
export class question{
  question!: String
  option1!: String
  option2!: String
  option3!: String
  option4!: String
  answer!: String
  correct!: String
  level!: String 
}
