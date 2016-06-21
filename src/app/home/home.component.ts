import { Component, OnInit } from '@angular/core';
import { DTableComponent } from '../dtable';

@Component({
  selector: 'my-home',
  template: require('./home.component.html'),
  styles: [require('./home.component.scss')],
  directives: [DTableComponent]
})
export class HomeComponent implements OnInit {

  tableContent:any = [
    
      {name:"mahendran1",address:"bangalore",age:32},
      {name:"mahendran2",address:"bangalore",age:32},
      {name:"mahendran3",address:"bangalore",age:32},
      {name:"mahendran4",address:"bangalore",age:32},
      {name:"mahendran5",address:"bangalore",age:32},
      {name:"mahendran6",address:"bangalore",age:32},
      {name:"mahendran7",address:"bangalore",age:32},
      {name:"mahendran8",address:"bangalore",age:32},
      {name:"mahendran9",address:"bangalore",age:32},
      {name:"mahendran10",address:"bangalore",age:32},
      {name:"mahendran11",address:"bangalore",age:32},
      {name:"mahendran12",address:"bangalore",age:32},
      {name:"mahendran",address:"bangalore",age:32},
      {name:"mahendran",address:"bangalore",age:32},
      {name:"mahendran",address:"bangalore",age:32}
      
    
    
    
    
  ];
  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
