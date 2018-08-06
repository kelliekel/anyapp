import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aa-comp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() subTitle: string;
  
  constructor() { }

  ngOnInit() {
  }

}
