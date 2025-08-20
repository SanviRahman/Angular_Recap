// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-parent',
//   templateUrl: './parent.component.html',
//   styleUrls: ['./parent.component.css']
// })
// export class ParentComponent {
//   // Parent to Child data
//   parentMessage: string = "Hello from Parent!";

//   // Child to Parent data
//   messageFromChild: string = "";

//   // Receive data from child
//   updateFromChild(message: string) {
//     this.messageFromChild = message;
//   }

//   // Button click sends message to child
//   sendMessageToChild() {
//     // Change parentMessage, child will automatically receive it
//     this.parentMessage = "Message from Parent via Button!";
//   }
// }


import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  // Data shared between parent and child
  sharedMessage: string = "Hello from Parent!";
}
