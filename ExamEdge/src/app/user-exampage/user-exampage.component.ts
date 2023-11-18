import { HttpClient } from '@angular/common/http';
import { Component, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-user-exampage',
  templateUrl: './user-exampage.component.html',
  styleUrls: ['./user-exampage.component.css']
})
export class UserExampageComponent {
  qustionList: question[] = [];
  currentIndex = 0;
  isLastQuestion = false;
  isFirstQuestion = true;
  
  answer!: String
  selectedAnswers: { [key: number]: String } = {};
  
  value: any;
  studentid :string | null = sessionStorage.getItem("StudentId")
  stuid: number | undefined =this.studentid ? parseInt(this.studentid):undefined
  result: result = new result(this.stuid);
   
  

  constructor(private http: HttpClient, private route:Router) {}
  ngOnInit() {
    this.allquestions();
  }

  allquestions() {
    let url = `http://localhost:8080/fetchquestionsbysubid?id=4`;
    this.http.get<any>(url).subscribe((data) => {
      this.result.id = data[0].subject.id
      this.result.level = data[0].level
      console.log(data)
      console.log(this.stuid)
      //save 10 questions to list 
      this.qustionList = this.getRandomQuestions(data, 10);
       
      this.qustionList.forEach((question) =>{
        question['uanswer']="";
      })
      this.isLastQuestion = false; // Reset isLastQuestion flag
    });

  }

  getRandomQuestions(allQuestions: question[], count: number): question[] {
    // Shuffle the array to get a random order
    allQuestions = this.shuffleArray(allQuestions);
    // Select the first 'count' questions
    return allQuestions.slice(0, count);
  }

  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  readsinglequestion(direction: 'next' | 'previous') {
    if (direction === 'next') {
      this.currentIndex = (this.currentIndex + 1) % this.qustionList.length;
      this.isLastQuestion = this.currentIndex === this.qustionList.length - 1;
    } else if (direction === 'previous') {
      this.currentIndex =
        (this.currentIndex - 1 + this.qustionList.length) % this.qustionList.length;
        this.isFirstQuestion = this.currentIndex === 0;
      this.isLastQuestion = false; // Reset isLastQuestion flag
    }
  }

  



  submitexam(){
    let url =`http://localhost:8080/score/calculator`
    let url1 =`http://localhost:8080/result`
    alert("Submit Exam")
    this.http.post<any>(url, this.qustionList).subscribe(data=> {
     
      this.result.marks=data
      sessionStorage.setItem("marks",data)
      console.log(this.result.marks)
    });
    this.http.post<any>(url1, this.result).subscribe(data => {
    console.log(this.qustionList)
    console.log(this.result)
    });

    this.route.navigate(["/user-scores"])

  //   let url = `http://localhost:8080/score/calculator`;
  // let url1 = `http://localhost:8080/result`;

  // alert("Submit Exam");
  // console.log(this.qustionList);
  // console.log(this.result);
  // forkJoin([
  //   this.http.post<any>(url, this.qustionList),
  //   this.http.post<any>(url1, this.result)
  // ]).subscribe(([scoreData, resultData]) => {
  //   this.result.marks = scoreData;
  //   console.log(this.result.marks);

  //   // Navigate to the next route after both requests are complete
  //   this.route.navigate(["/user-scores"]);
  // });

  
}
    
  }




  
export class question {
  question!: String;
  option1!: String;
  option2!: String;
  option3!: String;
  option4!: String;
  uanswer!: String;
  level!: String;
}

export class result{
  constructor(id: number | undefined) {
    this.id = id;
  }
  sid: number = stuid
  id: number |undefined
  level!: String
  marks: number =0
}
