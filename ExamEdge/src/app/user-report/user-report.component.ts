import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-report',
  templateUrl: './user-report.component.html',
  styleUrls: ['./user-report.component.css'],
  
})
export class UserReportComponent {
  detail: Detail = new Detail()
  sid = sessionStorage.getItem("StudentId")
  marks: score[]=[]
  constructor(private http: HttpClient, private route: Router) {
    this.sortedLeaderBoard = [...this.LeaderBoard]; // Copy the original data
    this.sortedLeaderBoard.sort((a, b) => b.marks - a.marks); // Sort by marks in descending order
    
  }
  emailId: String | null = sessionStorage.getItem("EmailId");

  getDetail(){
    let url = `http://localhost:8080/student/detail?emailId=${this.emailId}`
    this.http.get<any>(url).subscribe(data => {
      this.detail = data
      sessionStorage.setItem("StudentId", data.sid)
    })
  }

 

  ngOnInit() {
    this.getDetail();
    this.leaderboard();
    this.checkscore();
  }

  skillsData = [
    { name: 'Java', percentage: 70 },
    { name: 'Python', percentage: 68 },
    { name: 'C', percentage: 92 },
    { name: 'HTML', percentage: 47 },
    { name: 'CSS', percentage: 50 },
    { name: 'JS', percentage: 82 },
  ];



  LeaderBoard: leaderboard[] = [];

  sortedLeaderBoard: any[]; // Create an array for sorted leaderboard

  leaderboard(){
    let url=`http://localhost:8080/leaderboard`
    this.http.get<any>(url).subscribe(data =>{
      console.log(data)
      this.LeaderBoard=data
    })

  }

  checkscore(){
    let url =`http://localhost:8080/student/result?sid=${this.sid}`
    this.http.get<any>(url).subscribe(data =>{
      this.marks = data
      
    })
  }

}

export class Detail{
  name!: String
  emailId!: String
  phoneNo: number=0
  imageData!:String
}

export class leaderboard{
  name!: String
  mark: number | undefined
}

export class score{
  attempts!: number
  level!: String
  subjectId: number | undefined
  subjectName!: String 
}
export class subject{
  name!: String
}


