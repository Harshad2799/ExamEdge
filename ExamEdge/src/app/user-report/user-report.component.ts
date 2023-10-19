import { Component } from '@angular/core';

@Component({
  selector: 'app-user-report',
  templateUrl: './user-report.component.html',
  styleUrls: ['./user-report.component.css'],
  
})
export class UserReportComponent {

  skillsData = [
    { name: 'Java', percentage: 70 },
    { name: 'Python', percentage: 68 },
    { name: 'C', percentage: 92 },
    { name: 'HTML', percentage: 47 },
    { name: 'CSS', percentage: 50 },
    { name: 'JS', percentage: 82 },
  ];

  // StudentScores = [
  //   {}
  //   {}
  //   {}
  // ]
}
