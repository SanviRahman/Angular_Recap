import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  inputText:string='Sanvi Rahman';

  destroy:boolean=true;

  onSubmit(inputEl:HTMLInputElement){
    this.inputText=inputEl.value;
  }

  onDelete(){
    this.destroy=false;
  }
  

}
