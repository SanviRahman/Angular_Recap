import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

  @Input() value: string = '';

  constructor() {
    console.log("Constructor called")
  }

  ngOnChanges(change: any) {
    console.log('ngOnChanges Called');
    console.log(change);
  }

  ngOnInit() {
    console.log('ngOnInit Called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit Called');
  }


  ngOnDestroy() {
    console.log('ngOnDestroy Called');
  }

}
