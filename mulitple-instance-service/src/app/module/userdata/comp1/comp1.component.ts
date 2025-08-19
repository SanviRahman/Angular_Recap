import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
  providers:[DataService]
})
export class Comp1Component {
  

  text:string='';

  constructor(public service:DataService){ }

  
  updateMessage(){
    this.service.setMessage(this.text);
  }

}
