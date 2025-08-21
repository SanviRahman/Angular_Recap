import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  user={
    name: "",
    email:"",
    password:"",
    gender:"",
  }

  onSubmit(form:NgForm){
    if(form.valid){
      alert("Form Submit Sucessful");
      console.log(form.value);
    }
    else{
      console.log("Form is Invalid");
      alert("Invalid Form");
    }
  }

}
