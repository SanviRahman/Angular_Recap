import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories=[
    {
      name:'Electronics:',
      products:['Laptop','Smartphone','Headphone']
    },
    {
      name:'Clothing:',
      products:['T-Shirt','Jeans','Shoes']
    }
  ]
}
