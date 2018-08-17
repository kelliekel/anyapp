import { Component, OnInit } from '@angular/core';
import { ComponentsService } from '@anyapp/components';

@Component({
  selector: 'aa-lazy-load-test',
  templateUrl: './lazy-load-test.component.html',
  styleUrls: ['./lazy-load-test.component.scss']
})
export class LazyLoadTestComponent implements OnInit {
  constructor(private service: ComponentsService) { }

  ngOnInit() {
  }
}
