import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  func: FormGroup;

  constructor(private fm: FormBuilder){
    this.func= fm.group({
      fname:['',[Validators.required]],
      lname:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      selected:['',[Validators.required]]
    })
  }

  get fname(){
    return this.func.get('fname');
  }

  get lname(){
    return this.func.get('lname');
  }

  get email(){
    return this.func.get('email');
  }

  get password(){
    return this.func.get('password');
  }
  
  get selected(){
    return this.func.get('selected');
  }


  onSubnit(){
    if(this.func.valid){
      alert("Form Submitted Successfully");
      console.log(this.func.value);
    }
    else{
      alert("Form Invalid!");
      console.log("Form Invalid");
    }
  }
}
