import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instruction-psge',
  templateUrl: './instruction-psge.component.html',
  styleUrls: ['./instruction-psge.component.css']
})
export class InstructionPsgeComponent {

constructor(private route:Router,private http:HttpClient){}

  startexam(){
this.route.navigate(["/user-exampage"])
  }
}
