import { Component } from '@angular/core';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent {
  subjects = [
    {
      name: 'Java',
      logo: 'assets/IMG/Java_Logo.png',
      
    },
    {
      name: 'Python',
      logo: 'assets/IMG/Pyhon_logo.png' ,
      
    },
    {
      name: 'C',
      logo: 'assets/IMG/C_Logo.png',
      
    },
    {
      name: 'HTML5',
      logo: 'assets/IMG/HTML5_logo.png',
      
    },
    {
      name: 'CSS',
      logo: 'assets/IMG/CSS_Logo.jpeg',
      
    },
    {
      name: 'JavaScript',
      logo: 'assets/IMG/JS_Logo.png',
    }
  ];
}
