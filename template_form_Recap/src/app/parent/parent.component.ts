import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  user = {
    name: "",
    email: "",
    password: "",
    gender: "",
  }

  showModal = false;       
  modalMessage = "";       
  isSuccess = false;     

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.isSuccess = true;
      this.modalMessage = "Form Submit Successful!";
      this.showModal = true;
      console.log(form.value);
    }
    else {
      this.isSuccess = false;
      this.modalMessage = "Invalid Form. Please fill all required fields.";
      this.showModal = true;
      console.log("Form is Invalid");
    }
  }

  closeModal() {
    this.showModal = false;
  }


}
