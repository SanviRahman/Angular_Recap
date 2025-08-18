import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user = {
    name: " ",
    email: " ",
    password: " ",
    gender:" ",
  }

  onSubmit(form:NgForm){
    if(form.valid){
      console.log(form);
      alert("Signup Successful!");
    }
  }
}
