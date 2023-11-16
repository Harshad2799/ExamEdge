import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-admin-student-reports',
  templateUrl: './admin-student-reports.component.html',
  styleUrls: ['./admin-student-reports.component.css']
})
export class AdminStudentReportsComponent {
  
  // ngOnInit() {
  //    this.createPieChart();
  // }



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
  { id: 12, name: 'Swati', subject: 'History', level: 'Level 3', marks: 80, status: 'Pass' }

  ];

  filteredStudents: any[] = this.students;
  filterStudents() {
    this.filteredStudents = []; 
    if(this.selectedLevel === "Empty"){
      this.filteredStudents = [];
      console.log("empty data")
    }
   else if (this.selectedLevel === 'all') {
      this.filteredStudents = this.students;
    } else {
      for (let i = 0; i < this.students.length; i++) {
        const student = this.students[i];
        if (student.level === this.selectedLevel) {
          this.filteredStudents.push(student);
        }
      }
    }
  }
  


  searchStudent() {
    this.searchInput = this.search.toLowerCase();

    if (this.searchInput === '') {
        this.msg = "Please enter student details";
        console.log("enter details")
        return ;
    }

    const student = this.students.find(
        s => s.name.toLowerCase().includes(this.searchInput) || s.id.toString() === this.searchInput
    );

    if (student != null) {
        this.selectedStudent = student;
    } else {
        this.msg = "Student not found";
        console.log("not found")
    }
}

// @ViewChild('pieChartCanvas') pieChartCanvas!: ElementRef;

  

//   createPieChart() {
//     // Data for the pie chart
//     const data = {
//       labels: ['Java', 'Python', 'C', 'HTML', 'CSS', 'JS'],
//       datasets: [
//         {
//           data: [70, 68, 92, 47, 50, 82],
//           backgroundColor: ['#17c0eb', '#55efc4', '#ff7675', '#bcbcbc', '#ff4757', '#45aaf2'],
//         },
//       ],
//     };
//     // Configuration for the pie chart
//     const config: Chart.ChartConfiguration = {
//       type: 'pie',
//       data: data,
//       options: {
//         responsive: true,
//         maintainAspectRatio: false,
//       },
//     };

//     // Get the canvas element
//     const ctx = this.pieChartCanvas.nativeElement.getContext('2d');

//     // Create the pie chart
//     const pieChart = new Chart(ctx, config);
//   }
}
