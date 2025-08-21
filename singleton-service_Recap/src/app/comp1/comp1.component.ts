import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

  constructor(public data: DataService) { }

  result: any = 0;

  n1: number = 0;
  n2: number = 0;


  add() {
    this.result = "Sum is: " + this.data.add(this.n1, this.n2);
  }

  subtract() {
    this.result = "Subtract is: " + this.data.subtrack(this.n1, this.n2);
  }

  multiply() {
    this.result = "Multiply is: " + this.data.multipy(this.n1, this.n2);
  }

  divided() {
    this.result = "Division is: " + this.data.divided(this.n1, this.n2);
  }

}
