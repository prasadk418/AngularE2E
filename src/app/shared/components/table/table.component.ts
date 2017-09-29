import { Component, OnInit, Input } from '@angular/core';
import { FilterPipe } from './tablefilter.pipe';
import { LimitToPipe } from './tablelimitto.pipe';

@Component({
  selector: 'e2edt-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() rows;
  @Input() columns;
  @Input() search;
  @Input() limitTo;

  isDesc = true;
  column;
  direction;
  sortIconClass ='sorting';
  sort(col){
    this.isDesc = !this.isDesc; //change the direction    
    this.column = col;
    this.direction = this.isDesc ? 1 : -1;
    this.sortIconClass = this.isDesc ? 'sorting_asc' : 'sorting_desc';
  }

  getSortIconClass(){
    return this.sortIconClass;
  }
  constructor() { 
     this.search = null;
  }

  ngOnInit() {
  }

}
