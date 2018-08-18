import { Component, OnInit } from '@angular/core';
import { CustomTemplate } from './custom.template';

@Component({
  selector: 'aa-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  constructor() { }

  contentTemplate: any = CustomTemplate;

  data: any[] = [
    { id: 1, title: 'Dit is zomaar een test', description: 'desc test', icon: 'face' },
    { id: 2, title: 'En dit ook' },
    { id: 3, title: 'En nog eentje' },
    { id: 4, title: 'Even proberen wat er gebeurd' },
    { id: 5, title: 'Probeersel1' },
    { id: 6, title: 'Nog een probeersel2' },
    { id: 7, title: 'En het laatste item' }
  ];

  ngOnInit() {
  }

  loadData() {
  }
}
