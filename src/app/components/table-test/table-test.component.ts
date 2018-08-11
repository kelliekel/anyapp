import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aa-table-test',
  templateUrl: './table-test.component.html',
  styleUrls: ['./table-test.component.scss']
})
export class TableTestComponent implements OnInit {
  data: any[] = [
    {id: 1, name: 'first row', description: 'this is the first row'},
    {id: 2, name: 'second row', description: 'this is the second row'},
    {id: 3, name: 'third row', description: 'this is the third row'},
    {id: 4, name: 'fourth row', description: 'this is the fourth row'},
    {id: 5, name: 'fifth row', description: 'this is the fifth row'}
]

  constructor() { }

  ngOnInit() {
  }

}
