import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
  providers:[DataService]
})
export class Comp2Component {
  text: string = '';

  constructor(public service:DataService) { }

  updateMessage() {
    this.service.setMessage(this.text);
  }
}
