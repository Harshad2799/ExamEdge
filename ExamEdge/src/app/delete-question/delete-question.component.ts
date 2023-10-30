import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-question',
  templateUrl: './delete-question.component.html',
  styleUrls: ['./delete-question.component.css']
})
export class DeleteQuestionComponent {
  
  selectedSubject!: String;
  subjects: string[] = ["python", "java", "c", "HTML", "CSS"];
  selectedQuestions: any[] = [];

  questions: any[] = [
    {
      subject: 'python',
      questionText: 'What is a tuple in Python?',
      option1: 'An ordered, immutable list',
      option2: 'A key-value pair',
      option3: 'A data type for storing characters',
      option4: 'A loop control structure',
    },
    {
      subject: 'java',
      questionText: 'What is a class in Java?',
      option1: 'A blueprint for objects',
      option2: 'A data structure',
      option3: 'A loop control structure',
      option4: 'A built-in function',
    },
    {
      subject: 'c',
      questionText: 'What is the syntax for a while loop in C?',
      option1: 'while (condition) { // code }',
      option2: 'for (init; condition; increment) { // code }',
      option3: 'do { // code } while (condition);',
      option4: 'if (condition) { // code }',
    },
    // Add more questions for Python, Java, and C
  ];


  SubjectSelect() {
    // console.log('Selected Subject:', this.selectedSubject);
    this.selectedQuestions = this.questions.filter(question => question.subject === this.selectedSubject);
    // console.log('Selected Questions:', this.selectedQuestions);
  }

  onDelete() {
    this.selectedQuestions = [];
  }

  onDeleteQuestion(index: number): void {
    alert("Are you sure you want to delete");
    this.selectedQuestions.splice(index, 1);
  }
}
