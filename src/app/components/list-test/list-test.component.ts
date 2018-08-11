import { Component, OnInit } from '@angular/core';
import { ListItems } from '@anyapp/components';

@Component({
  selector: 'aa-list-test',
  templateUrl: './list-test.component.html',
  styleUrls: ['./list-test.component.scss']
})
export class ListTestComponent implements OnInit {
  data: any[];//ListItems = new ListItems();
  selectedTab: any;

  constructor() {
    this.data = [
      {id:1,text:'Dit is zomaar een test'},
      {id:2,text:'En dit ook'},
      {id:3,text:'En nog eentje'},
      {id:4,text:'Even proberen wat er gebeurd'},
      {id:5,text:'Probeersel1'},
      {id:6,text:'Nog een probeersel2'},
      {id:7,text:'En het laatste item'}
    ];
  }

  ngOnInit() {
  }

}
