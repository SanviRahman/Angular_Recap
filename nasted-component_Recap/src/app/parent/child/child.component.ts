// import { Component, Input, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-child',
//   templateUrl: './child.component.html',
//   styleUrls: ['./child.component.css']
// })
// export class ChildComponent {
//   // Receive data from parent
//   @Input() childMessage!: string;

//   // Send data to parent
//   @Output() sendToParent = new EventEmitter<string>();

//   childResponse: string = "Hello from Child!";

//   sendMessageToParent() {
//     this.sendToParent.emit(this.childResponse);
//   }
// }


import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // Input from parent
  @Input() childMessage!: string;

  // Output to parent (needed for two-way binding)
  @Output() childMessageChange = new EventEmitter<string>();

  // Update parent whenever input changes
  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.childMessage = input.value;
    this.childMessageChange.emit(this.childMessage);
  }

}
