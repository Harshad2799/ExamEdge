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

  LeaderBoard = [
    {name: 'suraj', marks: 35},
    {name: 'sham' ,marks: 50},
    {name: 'nadakumar', marks: 65},
    {name: 'Rajesh', marks: 65}
  ];

  sortedLeaderBoard: any[]; // Create an array for sorted leaderboard

  constructor() {
    this.sortedLeaderBoard = [...this.LeaderBoard]; // Copy the original data
    this.sortedLeaderBoard.sort((a, b) => b.marks - a.marks); // Sort by marks in descending order
  }

}
