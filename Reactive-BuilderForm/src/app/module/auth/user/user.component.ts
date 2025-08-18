import { getLocaleEraNames } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  func: FormGroup;

  constructor(private fm: FormBuilder) {
    this.func = this.fm.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      selected: ['', [Validators.required]]
    })
  }

  get fname() {
    return this.func.get('fname');
  }

  get lname() {
    return this.func.get('lname');
  }

  get email() {
    return this.func.get('email');
  }

  get password() {
    return this.func.get('password');
  }

  get selected() {
    return this.func.get('selected');
  }


  onDisplay() {
    if (this.func.valid) {
      alert("Form Submit Succesfully.!")
      console.log(this.func.value);
    }
    else {
      console.log("Form is Invalid");
      alert("Invalid Form.!");
    }
  }

}
