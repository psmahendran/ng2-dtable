import { Component, OnInit, Input } from '@angular/core';
import { Control } from '@angular/common';

import { MapToIterablePipe, GlobalSearchPipe } from './dtable-pipes';

@Component({
  selector: 'ng2-dtable',
  template: require('./dtable.component.html'),
  styles: [require('./dtable.component.scss')],
  pipes: [ MapToIterablePipe, GlobalSearchPipe]

})
export class DTableComponent implements OnInit {

  @Input() tdata;
  
  globalSearch:string='';
  searchTerm = new Control();
  
  constructor() {
    // Do stuff
    this.searchTerm.valueChanges.debounceTime(400)
    .subscribe( v => {this.globalSearch =v;});
  }

  ngOnInit() {
    console.log('dtable Home');
  }

}
