import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ChildComponent) child !: ChildComponent;

  showPopup: boolean = false;   
  popupMessage: string = "";  

  ngAfterViewInit() {
    console.log(this.child.message);
  }

  callChildMethod() {

    this.popupMessage = this.child.message;
    this.showPopup = true;
  }

  updateChildMessage() {
    this.child.changeMessage("Message update from Parent!");
  }

  closePopup() {
    this.showPopup = false;
  }
}
