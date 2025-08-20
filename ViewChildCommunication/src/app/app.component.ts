import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ChildComponent) child !: ChildComponent;

  showPopup: boolean = false;   // popup control flag
  popupMessage: string = "";    // popup message

  ngAfterViewInit() {
    console.log(this.child.message);
  }

  callChildMethod() {
    // child এর method ব্যবহার না করে custom popup show করবো
    this.popupMessage = this.child.message;
    this.showPopup = true; // popup খুলে দাও
  }

  updateChildMessage() {
    this.child.changeMessage("Message update from Parent!");
  }

  closePopup() {
    this.showPopup = false; // popup বন্ধ করো
  }
}
