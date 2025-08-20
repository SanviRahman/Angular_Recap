import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  message:string="Hello From Child Component!";

  sayHello(){
    alert("Child Component Say : Hello Parent!");
  }

  changeMessage(newMsg:string){
    this.message=newMsg;
  }
}
