import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aa-comp-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.scss']
})
export class HintComponent implements OnInit {
  @Input() align: "start" | "end" = "start";
  
  constructor() { }

  ngOnInit() {
  }

}
