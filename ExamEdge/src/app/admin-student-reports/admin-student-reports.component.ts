import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-admin-student-reports',
  templateUrl: './admin-student-reports.component.html',
  styleUrls: ['./admin-student-reports.component.css'],
})
export class AdminStudentReportsComponent {
  selectedLevel: string = 'all';
  passFailData: number[] = [];
  search: string = '';
  selectedStudent: any;
  searchInput!: any;
  msg!: String;

  students = [
    { id: 1, name: 'Ramesh', subject: 'C', level: 'Level 1', marks: 80, status: 'Pass' },
    { id: 2, name: 'Suresh', subject: 'Java', level: 'Level 2', marks: 65, status: 'Pass' },
    { id: 3, name: 'Jhon', subject: 'python', level: 'Level 3', marks: 70, status: 'Pass' },
    { id: 4, name: 'Jhon', subject: 'Java', level: 'Level 1', marks: 75, status: 'Pass' },
    { id: 5, name: 'Rutuja', subject: 'HTML', level: 'Level 2', marks: 45, status: 'Fail' },
    { id: 6, name: 'Nandakishiore', subject: 'CSS', level: 'Level 3', marks: 65, status: 'Pass' },
    { id: 7, name: 'Yogesh', subject: 'JS', level: 'Level 1', marks: 90, status: 'Pass' },
    { id: 8, name: 'Saurabh', subject: 'JS', level: 'Level 2', marks: 85, status: 'Pass' },
    { id: 9, name: 'Saurabh', subject: 'HTML', level: 'Level 3', marks: 75, status: 'Pass' },
    { id: 10, name: 'Rutuja', subject: 'Python', level: 'Level 1', marks: 70, status: 'Pass' },
    { id: 11, name: 'Yogesh', subject: 'Java', level: 'Level 2', marks: 75, status: 'Pass' },
    { id: 12, name: 'Swati', subject: 'History', level: 'Level 3', marks: 80, status: 'Pass' },
  ];

  filteredStudents: any[] = this.students;
  pieChart: any;

  filterStudents() {
    this.filteredStudents = [];
    const passCount = this.students.filter(student => student.status === 'Pass').length;
    const failCount = this.students.filter(student => student.status === 'Fail').length;

    this.passFailData = [passCount, failCount];

    if (this.selectedLevel === 'Empty') {
      console.log('empty data');
    } else if (this.selectedLevel === 'all') {
      this.filteredStudents = this.students;
    } else {
      this.filteredStudents = this.students.filter(student => student.level === this.selectedLevel);
    }

    this.updatePieChart();
  }

  searchStudent() {
    this.searchInput = this.search.toLowerCase();

    if (this.searchInput === '') {
      this.msg = 'Please enter student details';
      console.log('enter details');
      return;
    }

    const student = this.students.find(
      s => s.name.toLowerCase().includes(this.searchInput) || s.id.toString() === this.searchInput
    );

    if (student != null) {
      this.selectedStudent = student;
    } else {
      this.msg = 'Student not found';
      console.log('not found');
    }
  }

  updatePieChart() {
    if (this.pieChart) {
      this.pieChart.destroy(); // Destroy existing chart instance
    }

    const ctx = document.getElementById('pieChart') as HTMLCanvasElement;
    this.pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Pass', 'Fail'],
        datasets: [
          {
            data: this.passFailData,
            backgroundColor: ['#55efc4', '#ff7675'],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }
}
