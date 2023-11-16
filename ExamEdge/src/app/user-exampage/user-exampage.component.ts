import { Component } from '@angular/core';

@Component({
  selector: 'app-user-exampage',
  templateUrl: './user-exampage.component.html',
  styleUrls: ['./user-exampage.component.css']
})
export class UserExampageComponent {

   mcqQuestions = [
    // Java Questions
    {
      sub: "Java",
      question: "What does JVM stand for?",
      options: ["A) Java Virtual Machine", "B) Java Virtual Memory", "C) Java Verification Machine", "D) Java Validating Mechanism"],
      correctAnswer: "A"
    },
    {
      sub: "Java",
      question: "Which of the following is not a valid data type in Java?",
      options: ["A) float", "B) double", "C) real", "D) boolean"],
      correctAnswer: "C"
    },
    {
      sub: "Java",
      question: "What is the correct way to declare an array in Java?",
      options: ["A) int[] myArray;", "B) array myArray[];", "C) int myArray[];", "D) array[] myArray;"],
      correctAnswer: "A"
    },
    {
      sub: "Java",
      question: "Which keyword is used for inheritance in Java?",
      options: ["A) extend", "B) inherit", "C) extends", "D) inheritance"],
      correctAnswer: "C"
    },
    {
      sub: "Java",
      question: "What is the Java compiler called?",
      options: ["A) Javac", "B) Java Compiler", "C) JCompiler", "D) CompileJava"],
      correctAnswer: "A"
    },
    {
      sub: "Java",
      question: "Which class is the superclass of all classes in Java?",
      options: ["A) Object", "B) Superclass", "C) MainClass", "D) BaseClass"],
      correctAnswer: "A"
    },
    {
      sub: "Java",
      question: "What is the result of 10 % 3 in Java?",
      options: ["A) 0", "B) 1", "C) 2", "D) 3"],
      correctAnswer: "B"
    },
    {
      sub: "Java",
      question: "Which access modifier makes a method or variable accessible only within the same class?",
      options: ["A) public", "B) protected", "C) private", "D) default"],
      correctAnswer: "C"
    },
    {
      sub: "Java",
      question: "In Java, which keyword is used for the inheritance of a class?",
      options: ["A) super", "B) this", "C) extends", "D) implement"],
      correctAnswer: "C"
    },
    {
      sub: "Java",
      question: "What is the output of 'System.out.println(5/2)' in Java?",
      options: ["A) 2.5", "B) 2", "C) 2.0", "D) 2.5000"],
      correctAnswer: "B"
    },
    // Python Questions
    {
      sub: "Python",
      question: "What is Python known for?",
      options: ["A) High performance", "B) Speed", "C) Readability", "D) Static typing"],
      correctAnswer: "C"
    },
    {
      sub: "Python",
      question: "Which of the following is not a valid variable name in Python?",
      options: ["A) my_var", "B) 123var", "C) _myVar", "D) Var123"],
      correctAnswer: "B"
    },
    {
      sub: "Python",
      question: "How do you start a Python comment?",
      options: ["A) //", "B) --comment", "C) #comment", "D) /*comment*/"],
      correctAnswer: "C"
    },
    {
      sub: "Python",
      question: "Which of the following is not a Python data type?",
      options: ["A) int", "B) char", "C) float", "D) str"],
      correctAnswer: "B"
    },
    {
      sub: "Python",
      question: "What is the output of 'print('Hello' + 'World')' in Python?",
      options: ["A) HelloWorld", "B) Hello World", "C) HelloWorld", "D) 'Hello' + 'World'"],
      correctAnswer: "A"
    },
    {
      sub: "Python",
      question: "In Python, which keyword is used to define a function?",
      options: ["A) define", "B) function", "C) def", "D) func"],
      correctAnswer: "C"
    },
    {
      sub: "Python",
      question: "How can you check the length of a list in Python?",
      options: ["A) list.length", "B) len(list)", "C) list.size", "D) list.count"],
      correctAnswer: "B"
    },
    {
      sub: "Python",
      question: "What does the 'if' statement do in Python?",
      options: ["A) Loops through a sequence", "B) Executes a block of code only if a condition is true", "C) Declares a function", "D) Breaks the program execution"],
      correctAnswer: "B"
    },
    {
      sub: "Python",
      question: "How do you declare a variable in Python?",
      options: ["A) var x", "B) x = 5", "C) create x", "D) set x 5"],
      correctAnswer: "B"
    },
    {
      sub: "Python",
      question: "Which built-in function is used to display output in Python?",
      options: ["A) console.log()", "B) print()", "C) display()", "D) show()"],
      correctAnswer: "B"
    },
    // C Questions
    {
      sub: "C",
      question: "Which header file is required for file I/O in C?",
      options: ["A) stdlib.h", "B) string.h", "C) math.h", "D) stdio.h"],
      correctAnswer: "D"
    },
    {
      sub: "C",
      question: "What is the correct way to declare a constant in C?",
      options: ["A) constant int x = 5;", "B) const x = 5;", "C) #define x 5", "D) const int x = 5;"],
      correctAnswer: "D"
    },
    {
      sub: "C",
      question: "In C, which data type is used to store a single character?",
      options: ["A) char", "B) int", "C) float", "D) double"],
      correctAnswer: "A"
    },
    {
      sub: "C",
      question: "What is the purpose of the 'break' statement in C?",
      options: ["A) To terminate the program", "B) To exit from a loop", "C) To skip the next iteration of a loop", "D) To print a line"],
      correctAnswer: "B"
    },
    {
      sub: "C",
      question: "Which operator is used for performing logical 'AND' operation in C?",
      options: ["A) &", "B) |", "C) ^", "D) &&"],
      correctAnswer: "D"
    },
    {
      sub: "C",
      question: "What is the size of the 'int' data type in C?",
      options: ["A) 4 bytes", "B) 2 bytes", "C) 8 bytes", "D) 1 byte"],
      correctAnswer: "A"
    },
    {
      sub: "C",
      question: "Which function is used to read a character from standard input in C?",
      options: ["A) scanf()", "B) gets()", "C) read()", "D) getchar()"],
      correctAnswer: "D"
    },
    {
      sub: "C",
      question: "What is the result of '5 / 2' in C?",
      options: ["A) 2.5", "B) 2", "C) 2.0", "D) 2.5000"],
      correctAnswer: "B"
    },
    {
      sub: "C",
      question: "What is the purpose of the 'void' keyword in C function declaration?",
      options: ["A) To indicate an empty function", "B) To declare a variable", "C) To specify a return type", "D) To indicate a recursive function"],
      correctAnswer: "A"
    },
    {
      sub: "C",
      question: "Which escape sequence is used to represent a new line character in C?",
      options: ["A) \\n", "B) \\r", "C) \\t", "D) \\b"],
      correctAnswer: "A"
    }
  ];
  
  // Now you have an array with 10 questions for each subject (Java, Python, C).
  
}
