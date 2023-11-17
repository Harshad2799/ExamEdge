
import { HttpClient } from '@angular/common/http';


import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-exampage',
  templateUrl: './user-exampage.component.html',
  styleUrls: ['./user-exampage.component.css']
})
export class UserExampageComponent {


  qustionList: question[] = []
  currentIndex = 0
  constructor(private http: HttpClient,private route: Router){}
  ngOnInit(){
    this.allquestions()
  }
  allquestions(){
    let url =`http://localhost:8080/fetchquestions?id=3`
    this.http.get<any>(url).subscribe(data => {
      this.qustionList = data
    })
  }

  readsinglequestion(){
    if (this.currentIndex < this.qustionList.length) {
      const currentItem = this.qustionList[this.currentIndex];
      console.log(currentItem); // You can do something with the item, e.g., display it in the console
      this.currentIndex++;
    } else {
      console.log('Reached the end of the array.');
    }
  }
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
