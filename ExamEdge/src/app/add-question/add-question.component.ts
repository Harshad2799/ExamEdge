import { Component } from '@angular/core';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent {
  question!: String
  option1!: string
  option2!: string
  option3!: string
  option4!: string
  answer!: string
}
